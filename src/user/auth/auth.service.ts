import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CustomerService } from 'src/user/customer/customer.service'

@Injectable()
export class AuthService {
    constructor( private customerService: CustomerService, private jwtService: JwtService){}

    async validateUser(username: String, password: String): Promise<any>{
        const user = await this.customerService.getForLogin(username)

        if (user && user.pass === password) return user
        
        return null
    }

    async login(user: any){
        const payload = {name: user.name, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
