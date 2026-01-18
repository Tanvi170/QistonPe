import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('analytics')
export class AnalyticsController {
  constructor(private dataSource: DataSource) {}

  @Get('vendor-outstanding')
  async outstanding() {
    return this.dataSource.query(`
      SELECT v.name,
      SUM(po.totalAmount) -
      COALESCE(SUM(p.amount),0) AS outstanding
      FROM vendor v
      JOIN purchase_order po ON po.vendorId = v.id
      LEFT JOIN payment p ON p.poId = po.id
      GROUP BY v.name
    `);
  }
}
