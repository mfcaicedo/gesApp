export interface UserRequest {
    uid?: string;
    name: string;
    lastName: string;
    identificationType: string;
    identificationNumber: number | string;
    phone: number | string;
    email: string;
    address: string;
    birthdate: string | Date;
    urlPhoto: string;
    role: string;
    country: string;
    department: string;
    city: string;
    gender: string;
    disability: string;
    civilStatus: string;
    job: string;
}