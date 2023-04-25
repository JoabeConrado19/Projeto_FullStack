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
        profileImage: string;
        description: string;
    };
    userId: string;
    year: string;
}