import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { CustomerModule } from 'src/user/customer/customer.module'
import { RolesGuard } from './role-type/role-type.guards'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtAuthGuards } from './jwt-auth.guards'
import { JwtStrategy } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'



@Module({
  imports: [CustomerModule, PassportModule, 
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '60000s'}
      })
    })
],
  controllers:[AuthController],
  providers: [AuthService, LocalStrategy,JwtAuthGuards , JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
