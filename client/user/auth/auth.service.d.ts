import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'src/user/customer/customer.service';
export declare class AuthService {
    private customerService;
    private jwtService;
    constructor(customerService: CustomerService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    getUser(headerToken: any): Promise<import("../customer/customer.interface").CustomerInterface>;
}
