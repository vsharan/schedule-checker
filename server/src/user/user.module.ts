import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema, ScheduleSchema } from './schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Schedule', schema: ScheduleSchema }])],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule { }