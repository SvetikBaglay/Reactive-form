export interface IClient {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  retryPassword: string,
  address: IClientAdress[],
}

export interface IClientAdress {
  city: string,
  street: string,
}