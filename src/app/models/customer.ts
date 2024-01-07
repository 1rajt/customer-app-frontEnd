export class Customer {
    firstName?: string;
    lastName?: string;
    email?: string;
    createdDate?: Date;
    updatedDate?: Date;

    constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }
}