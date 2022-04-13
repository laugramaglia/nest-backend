import { CustomerInterface } from './customer.interface';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    newCustomer(req: any): Promise<CustomerInterface>;
    getById(par: any): Promise<CustomerInterface>;
    getAll(): Promise<CustomerInterface[]>;
    updateById(par: any, property: any, valueP: any): Promise<CustomerInterface | Object>;
}
