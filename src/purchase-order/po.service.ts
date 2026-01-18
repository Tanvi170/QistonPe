import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrder } from './po.entity';
import { Vendor } from '../vendor/vendor.entity';
import { CreatePoDto } from './po.dto';

@Injectable()
export class PoService {
  constructor(
    @InjectRepository(PurchaseOrder) private poRepo: Repository<PurchaseOrder>,
    @InjectRepository(Vendor) private vendorRepo: Repository<Vendor>,
  ) {}

  async create(dto: CreatePoDto) {
    const vendor = await this.vendorRepo.findOneBy({ id: dto.vendorId });
    if (!vendor || vendor.status === 'Inactive') {
      throw new BadRequestException('Vendor inactive or not found');
    }

    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + vendor.paymentTerms);

    return this.poRepo.save({
      poNumber: `PO-${Date.now()}`,
      vendor,
      poDate: today,
      dueDate: due,
      totalAmount: dto.totalAmount,
      status: 'Approved',
    });
  }

  findAll() {
    return this.poRepo.find({ relations: ['vendor'] });
  }

  findOne(id: number) {
    return this.poRepo.findOne({ where: { id }, relations: ['vendor'] });
  }
}
