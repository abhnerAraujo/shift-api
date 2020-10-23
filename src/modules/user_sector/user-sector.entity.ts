import { User } from '../user/user.entity';
import { Sector } from '../sector/sector.entity';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class UserSector {

  @Column({ type: 'boolean', default: true })
  owner: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.userSectors, { primary: true })
  user: User;

  @ManyToOne(() => Sector, sector => sector.userSectors, { primary: true })
  sector: Sector;

}