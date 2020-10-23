import { BedStaff } from './../bed_staff/bed_staff.entity';
import { Sector } from '../sector/sector.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Bed {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  description: string;

  @Column({ type: 'int', nullable: false })
  order: number;

  @Column({ type: 'bool', nullable: false })
  active: boolean;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Sector, sector => sector.beds)
  sector: Sector;

  @OneToMany(() => BedStaff, bedStaff => bedStaff.bed)
  bedStaff: BedStaff[];

}