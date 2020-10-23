import { UserSector } from './../user_sector/user-sector.entity';
import { Staff } from './../staff/staff.entity';
import { Bed } from './../bed/bed.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';

export enum ScheduleType {
  TWELVE_FOR_THIRTY = 1,
  TWELVE_FOR_SIXTY = 2
}

export enum SectorType {
  ICU = 'I',
  NURSERY = 'N',
  ROOM = 'R'
}

@Entity()
export class Sector {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  description: string;

  @Column({ type: 'int', default: 2 })
  beds_per_staff: number;

  @Column({
    type: 'enum',
    enum: SectorType,
    default: SectorType.ICU
  })
  type: SectorType;

  @Column({
    type: 'enum',
    enum: ScheduleType,
    default: ScheduleType.TWELVE_FOR_THIRTY
  })
  schedule: ScheduleType

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  @OneToMany(() => Bed, bed => bed.sector)
  beds: Bed[];

  @OneToMany(() => Staff, staff => staff.sector)
  staff: Staff[];

  @OneToMany(() => UserSector, userSector => userSector.sector)
  userSectors: UserSector[];

}