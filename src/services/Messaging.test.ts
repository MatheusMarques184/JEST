import { Messaging } from './Messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  test('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });
  test('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  test('should call console.log with msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('teste');
  });
});
