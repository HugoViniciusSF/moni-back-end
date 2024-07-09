import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(
            createUserDto.username,
            createUserDto.password,
            createUserDto.role,
        );
    }
}