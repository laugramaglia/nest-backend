import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor ( private authService: AuthService ){
        super() // Config
    }

    async validate(username: String, pass: String): Promise<any> {
        const user = await this.authService.validateUser(username, pass)

        if(!user) throw new UnauthorizedException()

        return user
    }
}