import { OrderStatusProtocol } from './interface/orderStatus-protocol';
import { ShoppingCartProtocol } from './interface/shoppingCart-protocol';
import { MessagingProtocol } from './interface/menssaging-protocol';
import { PersistencyProtocol } from './interface/persistency-protocol';
import { CustomerOrder } from './interface/customerProtocol';

export class Order {
  private _orderStatus: OrderStatusProtocol = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly msg: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly client: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatusProtocol> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) return console.log('Carrinho vazio');
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `${this.client.getName()} ${this.client.getIDN()} seu Pedido foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
