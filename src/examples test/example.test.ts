describe('testando com test', () => {
  test('descricao do teste TEST', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('testando com it', () => {
  it('descricao do teste IT', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});
