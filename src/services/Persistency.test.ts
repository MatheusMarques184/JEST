import { Persistency } from './Persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return undefined', () => {
    const sut = new Persistency(); //system under teste = sut
    expect(sut.saveOrder()).toBeUndefined(); // checa se e undefined
  });
  test('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1); // checa se foi chamado somente 1 vez
  });
  test('should call console.log with pedido salvo', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('pedido salvo'); // checa o conteudo
  });
});
