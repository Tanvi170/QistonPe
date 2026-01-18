import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './vendor.dto';

@Controller('vendors')
export class VendorController {
  constructor(private service: VendorService) {}

  @Post()
  create(@Body() dto: CreateVendorDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}
