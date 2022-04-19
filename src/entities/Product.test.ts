import { Product } from './Product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return undefined', () => {
    const sut = createSut('teste', 12.5);
    expect(sut).toHaveProperty('name', 'teste');
    expect(sut.price).toBeCloseTo(12.5);
  });
});
