import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
  private usersRepository: Repository<User>) { }

  create(user: IUser): Promise<User> {
    const newUser = this.usersRepository.create();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.birthdate = user.birthdate;
    newUser.sex = user.sex;
    return this.usersRepository.save(newUser);
  }

  // delete(id: number): boolean {
  //   return true;
  // }

  getOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  // getAll(): User[] {
  // }
}
