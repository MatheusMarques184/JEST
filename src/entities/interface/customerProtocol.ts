/*------ ERRADO -------------
  Pois varia o usuario depender de preencher informacoes enexistentes como por exemplo cnpj para um pessoa fisica e cpf para pessoa juridica
*/
export interface Customer {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

//------ CORRETO -------------
export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}
