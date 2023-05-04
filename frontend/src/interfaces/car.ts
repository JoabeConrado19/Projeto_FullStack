export interface IImages {
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
  miles: string;
  color: string;
  description: string;
  price: number;
  imagesUrl: string;
  isActive: boolean;
  isPromotional: boolean;
  createdAt: string;
  userId: string;
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
