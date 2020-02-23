import { Controller, Post, Body, Get, Put, Delete, Param, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto, ScheduleSearchDto } from "./dto";
import { User } from "./interfaces/user.interface";
import { Schedule } from "./interfaces/schema.interface";
import { CreateScheduleDto } from "./dto/create-schedule.dto";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): any {
        console.log(createUserDto);
        return this.userService.create(createUserDto);
    }

    @Get()
    getUsers(): any {
        console.log('Users Data ------- ');
        return this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param('id') id): Promise<User> {
        console.log('User ID ------- ', id);
        return this.userService.findOne(id);
    }

    @Put()
    updateUser(@Body() userDto: UpdateUserDto): any {
        console.log(userDto);
        return this.userService.update();
    }

    @Delete('id')
    deleteUser(@Param('id') id: string): any {
        console.log(id);
        return this.userService.delete();
    }

    @Post(':id/schedules')
    createUserSchedule(@Param('id') id: string, @Body() createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        console.log('-----------------> ', createScheduleDto);
        return this.userService.createSchedule(id, createScheduleDto);
    }

    @Get(':userId/schedules')
    userSchedules(@Param('userId') userId: string, @Query() queryParams: ScheduleSearchDto): Promise<Schedule[]> {
        return this.userService.userSchedules(userId, queryParams);
    }
}