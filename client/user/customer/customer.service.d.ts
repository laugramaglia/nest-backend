import { Customer } from './customer.schema';
import { CustomerInterface } from './customer.interface';
import { Model } from 'mongoose';
export declare class CustomerService {
    private customerModal;
    constructor(customerModal: Model<Customer>);
    newCustomer(customer: CustomerInterface): Promise<CustomerInterface>;
    getAll(): Promise<CustomerInterface[]>;
    getById(_id: any): Promise<CustomerInterface>;
    getForLogin(user: any): Promise<CustomerInterface>;
    updateById(_id: any, proper: any, value: any): Promise<any>;
}
