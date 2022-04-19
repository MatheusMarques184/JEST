import { ShoppingCart } from './ShoppingCart';
import { ItemProtocol } from './interface/item-protocol';

const createSut = (): ShoppingCart => {
  return new ShoppingCart();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements ItemProtocol {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = (): ShoppingCart => {
  const sut = new ShoppingCart();
  const cartItem1 = createCartItem('teste1', 10);
  const cartItem2 = createCartItem('teste2', 20);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return sut;
};

describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks());

  test('should be an empty cart when no product is added', () => {
    const sut = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  test('should have 2 cart items', () => {
    const sut = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  test('should test total and totalWithDiscount', () => {
    const sut = createSutWithProducts();
    expect(sut.total()).toBe(30);
    expect(sut.totalWithDiscount(10)).toBe(27);
  });

  test('should add products and clear cart', () => {
    const sut = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  test('should remove products', () => {
    const sut = createSutWithProducts();
    const item3 = { name: 'teste3', price: 12 };
    sut.addItem(item3);
    expect(sut.items.length).toBe(3);
    sut.removeItem(item3);
    expect(sut.items.length).toBe(2);
  });
});
