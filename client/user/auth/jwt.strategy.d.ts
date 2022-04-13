import { Strategy } from "passport-jwt";
import { CustomerService } from "../customer/customer.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private customerService;
    constructor(customerService: CustomerService);
    validate(payload: any): Promise<{
        user: import("../customer/customer.interface").CustomerInterface;
    }>;
}
export {};
