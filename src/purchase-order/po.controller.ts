import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PoService } from './po.service';
import { CreatePoDto } from './po.dto';

@Controller('purchase-orders')
export class PoController {
  constructor(private service: PoService) {}

  @Post()
  create(@Body() dto: CreatePoDto) {
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
