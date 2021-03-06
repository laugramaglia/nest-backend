import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './user/users/users'
import { AuthModule } from './user/auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb+srv://masterUser:W73bAOToVWMjpv5R@cluster0.kooxl.mongodb.net/nestSuscriptionsTurns?retryWrites=true&w=majority',
    {useFindAndModify: false}
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UsersModule,
    AuthModule
  ],
  providers:[
  
  ]
})
export class AppModule {}

