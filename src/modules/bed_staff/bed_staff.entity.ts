import { Bed } from '../bed/bed.entity';
import { Staff } from '../staff/staff.entity';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class BedStaff {

  @Column({ type: 'boolean', default: true })
  daytime: boolean;

  @Column({ type: 'int' })
  day: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Staff, staff => staff.bedStaff, { primary: true })
  staff: Staff;

  @ManyToOne(() => Bed, bed => bed.bedStaff, { primary: true })
  bed: Bed;

}