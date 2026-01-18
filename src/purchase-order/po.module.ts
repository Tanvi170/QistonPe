import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder } from './po.entity';
import { Vendor } from '../vendor/vendor.entity';
import { PoService } from './po.service';
import { PoController } from './po.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseOrder, Vendor])],
  providers: [PoService],
  controllers: [PoController],
})
export class PurchaseOrderModule {}
