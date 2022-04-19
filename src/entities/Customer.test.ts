import { EnterpriseCustomer, IndividualCustomer } from './Customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  test('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Matheus', 'Marques', '111');
    expect(sut).toHaveProperty('firstName', 'Matheus');
    expect(sut).toHaveProperty('lastName', 'Marques');
    expect(sut).toHaveProperty('cpf', '111');
  });
  test('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Matheus', 'Marques', '111');
    expect(sut.getName()).toBe('Matheus Marques');
    expect(sut.getIDN()).toBe('cpf: 111');
  });
});

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
  test('should have firstName, lastName and cpf', () => {
    const sut = createEnterpriseCustomer('MatheusLTDA', '1234');
    expect(sut).toHaveProperty('name', 'MatheusLTDA');
    expect(sut).toHaveProperty('cnpj', '1234');
  });
  test('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('MatheusLTDA', '1234');
    expect(sut.getName()).toBe('MatheusLTDA');
    expect(sut.getIDN()).toBe('cnpj: 1234');
  });
});
