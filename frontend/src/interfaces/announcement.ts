export interface IAnnouncementsData{
    id: string;
    brand: [];
    color: string;
    comments: [];
    createdAt: Date;
    description: string;
    fuelType: string;
    images: [];
    imagesUrl: string;
    isActive: boolean;
    miles: string;
    model: string;
    price: number;
    user: {
        id: string;
        name: string;
        color: string;
        description: string;
    };
    userId: string;
    year: string;
}

export interface ICreateAnnounceSchema {
    brand: string
    model: string
    year: string
    fuelType: string
    miles: string
    color: string
    price: string
    description: string
    images_url: IImageUrl[]
}

export interface IImageUrl {
    url: string
}

export interface AnnouncementsList {
    announcements?: IAnnouncementsData[];
  }