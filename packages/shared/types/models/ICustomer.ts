export default interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}