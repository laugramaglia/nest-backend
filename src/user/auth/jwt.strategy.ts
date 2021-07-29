
import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { CustomerService } from "../customer/customer.service"
import { RoleType } from "./role-type/role-type.enum"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor( private customerService: CustomerService ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        })
    }
    async validate(payload: any){
        let user = await this.customerService.getById(payload.sub)
        return { user }        
    }
}