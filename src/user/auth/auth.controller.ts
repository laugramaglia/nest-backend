import { Controller, Get, Headers, Post, Request, UseGuards } from '@nestjs/common'
import { Roles } from './role-type/role-type.decorator'
import { RoleType } from './role-type/role-type.enum'
import { RolesGuard } from './role-type/role-type.guards'
import { AuthService } from './auth.service'
import { JwtAuthGuards } from './jwt-auth.guards'
import { LocalAuthGuard } from './local-auth.guard'
 
@Controller('auth')
export class AuthController {

  constructor( private readonly authService: AuthService ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        return this.authService.login(req.user)
  }


  @UseGuards(JwtAuthGuards, RolesGuard)
  @Get('me') 
  @Roles(RoleType.Customer)
  getSome(@Headers() headers): any{
    return this.authService.getUser(headers.authorization)
  }
 
}
