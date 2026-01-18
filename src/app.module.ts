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
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3305,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'tanvi',
      database: process.env.DB_NAME || 'msme',
      autoLoadEntities: true,
      synchronize: true,
    }),
    VendorModule,
    PurchaseOrderModule,
    PaymentModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
