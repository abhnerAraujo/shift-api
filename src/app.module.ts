import { UserSectorModule } from './modules/user_sector/user-sector.module';
import { BedStaffModule } from './modules/bed_staff/bed-staff.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BedModule } from './modules/bed/bed.module';
import { StaffModule } from './modules/staff/staff.module';
import { SectorModule } from './modules/sector/sector.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    BedModule,
    StaffModule,
    SectorModule,
    BedStaffModule,
    UserSectorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
