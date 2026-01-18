import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'Active' })
  status: 'Active' | 'Inactive';

  @Column({ default: 30 })
  paymentTerms: number;
}
