import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { ROLES_KEY } from './role-type.decorator'
import { RoleType } from './role-type.enum'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
    const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (!requiredRoles) {
      return true;
    }
    const {user} = context.switchToHttp().getRequest()
    let finalUser = user.user
  
    const hasRole = () => requiredRoles.indexOf(finalUser.type) > -1
    let hasPermission: boolean = false

    if(hasRole()) hasPermission = true

    return user && hasPermission 
  }
} 