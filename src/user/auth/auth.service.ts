import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CustomerService } from 'src/user/customer/customer.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor( private customerService: CustomerService, private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.customerService.getForLogin(username)
        
        const isMatch = await bcrypt.compare(password, user.pass)
        if (isMatch) return user
        
        return null
    }

    async login(user: any){
        const payload = {name: user.name, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    getUser(headerToken: any){
        const beared = headerToken.substr(headerToken.indexOf(' ')+1)
        const User =  this.jwtService.decode(beared)
        return {"data": User}
    }
}
