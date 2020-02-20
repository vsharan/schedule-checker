import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('MongoServer', { useNewUrlParser: true, useUnifiedTopology: true }),
    UserModule
  ]
})
export class AppModule { }
