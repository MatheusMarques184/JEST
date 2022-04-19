import { ItemProtocol } from './item-protocol';

export interface ShoppingCartProtocol {
  items: Readonly<ItemProtocol[]>;
  addItem(item: ItemProtocol): void;
  removeItem(item: ItemProtocol): void;
  total(): number;
  totalWithDiscount(discount: number): number;
  isEmpty(): boolean;
  clear(): void;
}
