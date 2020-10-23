import { BedStaff } from './bed_staff.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([BedStaff])
  ]
})
export class BedStaffModule { }
