import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { PurchaseOrder } from '../purchase-order/po.entity';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, PurchaseOrder])],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
