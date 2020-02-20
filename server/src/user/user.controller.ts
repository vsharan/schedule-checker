import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./interfaces/user.interface";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

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
        return this.userService.updateUser();
    }

    @Delete('id')
    deleteUser(@Param() id: string): any {
        console.log(id);
        return this.userService.deleteUser();
    }
}