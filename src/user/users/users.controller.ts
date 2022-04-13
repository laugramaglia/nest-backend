import { Controller, Get, Post, Req, Param, Put, Body, UseGuards } from '@nestjs/common'
import { JwtAuthGuards } from '../auth/jwt-auth.guards'
import { UsersInterface } from './users.interface'
import { UsersService } from './users.service'



@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService){}

    // api request
    // @UseGuards(JwtAuthGuards)
    // @Roles(RoleType.Admin, RoleType.Master)
    @Post('new')
    async newCustomer(@Req() req): Promise<UsersInterface>{
        return this.UsersService.newCustomer(req.body)
    }

    @Get('get/only/:id')
    async getById(@Param('id') par): Promise<UsersInterface>{
        return this.UsersService.getById(par)
    }

    @Get('get/all')
    async getAll(): Promise<UsersInterface[]>{
        return this.UsersService.getAll()
    }
    
    @UseGuards(JwtAuthGuards)
    @Put('update/only/:id')
    async updateById(@Param('id') par, @Body('prop') property, @Body('value') valueP): Promise<UsersInterface | Object>{
        if(property == 'type') return {message: 'Need to be a Master user'}
        return this.UsersService.updateById(par, property, valueP)
    }
}
