import { UserSector } from './../user_sector/user-sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSector])
  ]
})
export class UserSectorModule { }
