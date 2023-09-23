export default interface ICustomerAddress {
    id: number;
    customerId: number;
    nickname: string | null;
    streetAddress1: string;
    streetAddress2: string | null;
    city: string;
    state: string;
    zipCode: string;
    createdAt: Date | string;
}