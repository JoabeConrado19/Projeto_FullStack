import { ICar } from "./car";

export interface IUserData {
  id: string;
  name: string;
  email: string;
  description: string;
  phone: string;
  birthdate: string;
  cpf: string;
  createdAt: string;
  profileImage: string;
  accountType: string;
  color: string;
  // address:
  cars: ICar[];
  // comments:
}

export interface ILoginSubmit {
  email: string;
  password: string;
}
export interface IRegisterSubmit {
  name: string;
  email: string;
  cpf: number;
  phone: number;
  birthdate: string;
  description: string;
  accountType: string | null;
  address: {
    cep: number;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
  password: string;
  passwordConfirmation: string;
  profileImage: string;
}

export interface IForgotPasswordSubmit {
  email: string
}