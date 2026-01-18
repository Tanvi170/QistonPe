import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './vendor.entity';
import { CreateVendorDto } from './vendor.dto';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor) private repo: Repository<Vendor>,
  ) {}

  async create(dto: CreateVendorDto) {
    try {
      return await this.repo.save(dto);
    } catch {
      throw new ConflictException('Vendor name or email already exists');
    }
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
}
