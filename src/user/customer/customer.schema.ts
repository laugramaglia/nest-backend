import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose';
import { RoleType } from '../auth/role-type/role-type.enum'
import { CustomerInterface } from './customer.interface';

@Schema()
export class Customer extends Document implements CustomerInterface{

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

  @Prop({enum: RoleType, default: RoleType.Customer})
  type: RoleType
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);