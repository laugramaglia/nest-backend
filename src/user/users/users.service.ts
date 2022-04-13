import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Users } from './users.schema'
import { UsersInterface } from './users.interface'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor( @InjectModel(Users.name) private usersModal: Model<Users>){}

    async newCustomer(users: UsersInterface): Promise<UsersInterface> {
        let Users = new this.usersModal(users)
        const saltOrRounds = await bcrypt.genSalt(10)
       let hash = await bcrypt.hash(Users.pass, saltOrRounds)
       Users.pass = hash
        
        return Users.save()
    }

    async getAll(): Promise<UsersInterface[]> {
        return this.usersModal.find().exec()
      }

    async getById(_id): Promise<UsersInterface> {
        return this.usersModal.findOne({_id})
    }

    async getForLogin(user): Promise<UsersInterface> {
        return this.usersModal.findOne({user})
    }

    async updateById(_id: any, proper: any, value: any): Promise<any>{
        let data = {}
        data[proper] = value
        this.usersModal.findByIdAndUpdate(_id, data)
        return {messaje: 'update successfully, ' + proper +': '+ value, status: 200}
    }
}
