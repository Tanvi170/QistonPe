import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { PurchaseOrder } from '../purchase-order/po.entity';
import { CreatePaymentDto } from './payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private payRepo: Repository<Payment>,
    @InjectRepository(PurchaseOrder) private poRepo: Repository<PurchaseOrder>,
  ) {}

  async create(dto: CreatePaymentDto) {
    const po = await this.poRepo.findOneBy({ id: dto.poId });
    if (!po) throw new BadRequestException('PO not found');

    const payments = await this.payRepo.find({ where: { po } });
    const paid = payments.reduce((s, p) => s + p.amount, 0);

    if (paid + dto.amount > po.totalAmount) {
      throw new BadRequestException('Payment exceeds outstanding');
    }

    const payment = await this.payRepo.save({
      reference: `PAY-${Date.now()}`,
      po,
      amount: dto.amount,
      paymentDate: new Date(),
    });

    po.status =
      paid + dto.amount === po.totalAmount ? 'Fully Paid' : 'Partially Paid';
    await this.poRepo.save(po);

    return payment;
  }
}
