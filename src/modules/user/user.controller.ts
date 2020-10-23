import { UserService } from './user.service';
import { IUser } from './interfaces';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import * as moment from 'moment';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  // @Get(':id')
  // findOne(@Param('id') id): User {
  //   console.log(id);
  //   return this.userService.getOne(Number(id));
  // }

  // @Get()
  // findAll(): User[] {
  //   return this.userService.getAll();
  // }

  @Post()
  add(@Body() body: any) {
    const user: IUser = {
      id: null,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      sex: body.sex,
      birthdate: moment(body.birthdate).toDate()
    };
    return this.userService.create(user);
  }
}
