import { Model } from 'mongoose';
import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        console.log('-----------------> ', id);
        return this.userModel.findById(id);
    }

    updateUser(): any {
        return 'User updated!!';
    }

    deleteUser(): any {
        return 'User deleted!!';
    }
}