import { ICarsData } from "./announcement";

export interface IUserData {
  id: string;
  name: string;
  email: string;
  description: string;
  phone: string;
  birthdate: string;
  cpf: string;
  createdAt: string;
  color: string;
  accountType: string;
  // address:
  cars: ICarsData[];
  // comments:
}

export interface ILoginSubmit {
  email: string;
  password: string;
}
