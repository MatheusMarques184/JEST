import { PersistencyProtocol } from '../entities/interface/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('pedido salvo');
  }
}
