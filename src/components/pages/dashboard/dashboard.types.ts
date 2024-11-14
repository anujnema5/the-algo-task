
export type Doctor = {
    name: string;
    specialty: string;
    rating: number;  
    reviews: number;  
    imgSrc?:string; 
};

export type Product = {
    name: string;
    price: number;
    originalPrice: number;
    image: string;  
};

export type HealthPackage = {
    name: string;
    description: string;
    icon: string;
};

export type Medication = {
    name: string;
    dosage: string;
    instructions: string;
};

export type Consultation = {
    doctor: {
        name: string;
        specialty: string;
        avatar: string; 
    };
    date: string;
    time: string;
    imgSrc: string;
};
