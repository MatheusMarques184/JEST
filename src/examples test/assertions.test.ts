describe('Primitive values', () => {
  test('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(9); // maior que
    expect(number).toBeGreaterThanOrEqual(9); // maior ou igual que
    expect(number).toBeLessThan(11); // menor que
    expect(number).toBeLessThanOrEqual(11); // menor ou igual que
    expect(number).toBeCloseTo(10, 2); // primeiro parametro e o valor a sem comparado, segundo paremetro e o range de diferenca aceitada
  });
});

describe('Objects', () => {
  test('should test jest assertions with objects', () => {
    const person = { nome: 'matheus', sobrenome: 'marques', idade: 20 };
    const otherPerson = { ...person };
    expect(person).toEqual(otherPerson); // toEqual usado para checar obj
    expect(person).toHaveProperty('sobrenome'); // checa se existe a propriedade
    expect(person).toHaveProperty('idade', 22); //  checa se a propriedade existe e se o valor e igual
    expect(person.nome).not.toBeUndefined();
  });
});
