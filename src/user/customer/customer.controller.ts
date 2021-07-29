import { Controller, Get, Post, Req, Param, Put, Body, UseGuards } from '@nestjs/common'
import { JwtAuthGuards } from '../auth/jwt-auth.guards'
import { RolesGuard } from '../auth/role-type/role-type.guards'
import { CustomerInterface } from './customer.interface'
import { CustomerService } from './customer.service'

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    // api request
    @Post('new')
    async newCustomer(@Req() req): Promise<CustomerInterface>{
        return this.customerService.newCustomer(req.body)
    }

    @Get('get/only/:id')
    async getById(@Param('id') par): Promise<CustomerInterface>{
        return this.customerService.getById(par)
    }

    @Get('get/all')
    async getAll(): Promise<CustomerInterface[]>{
        return this.customerService.getAll()
    }
    
    @UseGuards(JwtAuthGuards)
    @Put('update/only/:id')
    async updateById(@Param('id') par, @Body('prop') property, @Body('value') valueP): Promise<CustomerInterface | Object>{
        if(property == 'type') return {messaje: 'Need to be a Master user'}
        return this.customerService.updateById(par, property, valueP)
    }
}
