import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    
    createUser(): any {
        return 'User created!!';
    }

    getUsers(): any {
        return 'Users Data!!';
    }

    getUser(): any {
        return 'User Data!!';
    }

    updateUser(): any {
        return 'User updated!!';
    }

    deleteUser(): any {
        return 'User deleted!!';
    }
}