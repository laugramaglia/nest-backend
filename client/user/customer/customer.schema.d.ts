import { Document } from 'mongoose';
import { RoleType } from '../auth/role-type/role-type.enum';
import { CustomerInterface } from './customer.interface';
export declare class Customer extends Document implements CustomerInterface {
    name: string;
    email: string;
    user: string;
    pass: string;
    coin: Number;
    type: RoleType;
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<any, any, any>, undefined, any>;
