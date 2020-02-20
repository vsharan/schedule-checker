import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() userDto: CreateUserDto): any {
        console.log(userDto);
        return this.userService.createUser();
    }

    @Get()
    getUsers(): any {
        console.log('Users Data ------- ');
        return this.userService.createUser();
    }

    @Get('id')
    getUser(@Param() id: string): any {
        console.log('User ID ------- ', id);
        return this.userService.createUser();
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