import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CustomerModule } from './user/customer/customer.module'
import { AuthModule } from './user/auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb+srv://masterUser:W73bAOToVWMjpv5R@cluster0.kooxl.mongodb.net/nestSuscriptionsTurns?retryWrites=true&w=majority',
    {useFindAndModify: false}
    ),
    CustomerModule,
    AuthModule
  ],
  providers:[
  
  ]
})
export class AppModule {}

