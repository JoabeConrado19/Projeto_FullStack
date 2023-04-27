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
  // address:
  cars: ICar[];
  // comments:
}

export interface ILoginSubmit {
  email: string;
  password: string;
}
