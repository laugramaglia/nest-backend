import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';
import { RoleType } from '../auth/role-type/role-type.enum'
import { UsersInterface } from './users.interface';

@Schema()
export class Users extends Document implements UsersInterface{

  @Prop()
  name: string

  @Prop({required: true})
  email: string

  @Prop()
  user: string

  @Prop()
  pass: string

  @Prop()
  coin: Number

  @Prop({enum: RoleType, default: RoleType.employee})
  type: RoleType
}

export const UsersSchema = SchemaFactory.createForClass(Users);