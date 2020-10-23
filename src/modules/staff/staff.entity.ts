import { BedStaff } from './../bed_staff/bed_staff.entity';
import { Sector } from './../sector/sector.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';

export enum StaffRole {
  TECNIC = 'T',
  NURSE = 'N'
};

@Entity()
export class Staff {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;


  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({
    type: 'enum',
    enum: StaffRole,
    default: StaffRole.TECNIC
  })
  role: StaffRole;

  @CreateDateColumn({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Sector, sector => sector.staff)
  sector: Sector;

  @OneToMany(() => BedStaff, bedStaff => bedStaff.staff)
  bedStaff: BedStaff[];

}