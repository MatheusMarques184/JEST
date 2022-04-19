/*
  modulos de alto nivel nao devem ser dependestes do mudulo de baixo nivel, ambos devem depender de abstracoes.
  Detalhes devem depender das abstracoes, nao o inverso

  Classes de baixo nivel: executam tarafes
  Classes de alto nivel: sap classes que gerenciam as classes de baixo nivel
*/
import { Messaging } from './services/Messaging';
import { Order } from './entities/Order';
import { Persistency } from './services/Persistency';
import { ShoppingCart } from './entities/ShoppingCart';
import { Product } from './entities/Product';
import { MessagingProtocol } from './entities/interface/menssaging-protocol';
import { EnterpriseCustomer } from './entities/Customer';
//import { individualCustomer } from './entities/Customer';

class MenssagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('teste pelo mock');
  }
}

const menssagingMock = new MenssagingMock();

const cart1 = new ShoppingCart();
//const client1 = new IndividualCustomer('Matheus', 'Marques', '121212');
const client2 = new EnterpriseCustomer('MatheusLTDA', '5385830');
const order1 = new Order(cart1, menssagingMock, new Persistency(), client2);

const pain = new Product('pain', 10.87);
const book = new Product('book', 20.82);
const phone = new Product('phone', 120.1012);

cart1.addItem(pain);
cart1.addItem(book);
cart1.addItem(phone);
console.log(cart1.items);
console.log('-----------------------------------------');

cart1.removeItem(book);
console.log(cart1.items);
console.log(cart1.total());
console.log(cart1.totalWithDiscount(10));
console.log('-----------------------------------------');

console.log('Status do carrinho: ' + order1.orderStatus);
order1.checkout();
console.log(cart1.items);
console.log('Status do carrinho: ' + order1.orderStatus);
