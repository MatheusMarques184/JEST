import { ItemProtocol } from './interface/item-protocol';
import { ShoppingCartProtocol } from './interface/shoppingCart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: ItemProtocol[] = [];

  addItem(item: ItemProtocol): void {
    this._items.push(item);
  }

  removeItem(item: ItemProtocol): void {
    this._items.splice(this._items.indexOf(item), 1);
  }

  get items(): Readonly<ItemProtocol[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, value) => (total += value.price), 0)
      .toFixed(2);
  }

  totalWithDiscount(discount: number): number {
    discount = discount / 100;
    const total = this.total() * (1 - discount);
    return +total.toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
