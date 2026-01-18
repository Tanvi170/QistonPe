import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vendor } from '../vendor/vendor.entity';

@Entity()
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  poNumber: string;

  @ManyToOne(() => Vendor)
  vendor: Vendor;

  @Column()
  poDate: Date;

  @Column()
  totalAmount: number;

  @Column()
  dueDate: Date;

  @Column()
  status: string;
}
