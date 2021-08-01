import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Customer } from './customer.schema'
import { CustomerInterface } from './customer.interface'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

@Injectable()
export class CustomerService {
    constructor( @InjectModel(Customer.name) private customerModal: Model<Customer>){}

    async newCustomer(customer: CustomerInterface): Promise<CustomerInterface> {
        let Customer = new this.customerModal(customer)
        const saltOrRounds = await bcrypt.genSalt(10)
       let hash = await bcrypt.hash(Customer.pass, saltOrRounds)
       Customer.pass = hash
        
        return Customer.save()
    }

    async getAll(): Promise<CustomerInterface[]> {
        return this.customerModal.find().exec()
      }

    async getById(_id): Promise<CustomerInterface> {
        return this.customerModal.findOne({_id})
    }

    async getForLogin(user): Promise<CustomerInterface> {
        return this.customerModal.findOne({user})
    }

    async updateById(_id: any, proper: any, value: any): Promise<any>{
        let data = {}
        data[proper] = value
        this.customerModal.findByIdAndUpdate(_id, data)
        return {messaje: 'update successfully, ' + proper +': '+ value, status: 200}
    }
}
