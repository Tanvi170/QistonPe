import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PurchaseOrder } from '../purchase-order/po.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string;

  @ManyToOne(() => PurchaseOrder)
  po: PurchaseOrder;

  @Column()
  amount: number;

  @Column()
  paymentDate: Date;
}
