import { IUserData } from "./user";

export interface IImages {
  map(arg0: (image: any, index: number) => JSX.Element): import("react").ReactNode;
  id: string;
  url: string;
  carId: string;
}
export interface IBrand {
  id: string;
  brandName: string;
  carId: string;
}
export interface ICar {
  id: string;
  model: string;
  year: string;
  fuelType: string | number;
  miles: number;
  color: string;
  description: string;
  price: number;
  imagesUrl: string | undefined;
  isActive: boolean;
  isPromotional: boolean;
  createdAt: string;
  userId: string;
  user: IUserData;
  images: IImages;
  brand: IBrand;
}

export interface ICarRequest extends Partial<ICar> {
  carPriceChart: number;
}

export interface IKenzieKar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface IKenzieKarParcial {
  id?: string;
  name?: string;
  brand?: string;
  year?: string;
  value?: number;
}