import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDto, ScheduleSearchDto } from './dto';
import { Schedule } from './interfaces/schema.interface';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('Schedule') private readonly scheduleModel: Model<Schedule>) { }

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

    async update(): Promise<User> {
        return this.userModel.updateOne();
    }

    async delete() {
        return 'User deleted!!';
    }

    async createSchedule(id: string, createSchedule: CreateScheduleDto): Promise<Schedule> {
        const createdSchedule = this.scheduleModel({ userId: id, ...createSchedule });
        return createdSchedule.save();
    }

    async userSchedules(userId: string, { startTime, endTime }: ScheduleSearchDto): Promise<Schedule[]> {
        const fromDateSearch = new Date(startTime).setHours(0, 0, 0, 0);
        const toDateSearch = new Date(endTime).setHours(23, 59, 59, 999);
        console.log('user ID ', userId, ' fromDate --- ', fromDateSearch, ' endTime -- ', toDateSearch);
        const data = await this.scheduleModel.find({ userId, startTime: { '$gte': fromDateSearch }, endTime: { '$lte': toDateSearch } }).exec();
        console.log(data);
        return data;
    }
}