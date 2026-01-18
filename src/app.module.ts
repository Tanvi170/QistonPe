import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VendorModule } from './vendor/vendor.module';
import { PurchaseOrderModule } from './purchase-order/po.module';
import { PaymentModule } from './payment/payment.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true, // OK for college project
}),

    VendorModule,
    PurchaseOrderModule,
    PaymentModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
