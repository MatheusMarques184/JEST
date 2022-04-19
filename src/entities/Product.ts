import { ItemProtocol } from './interface/item-protocol';

export class Product implements ItemProtocol {
  constructor(public name: string, public price: number) {}
}
