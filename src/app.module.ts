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
      host: process.env.DB_HOST,      // MUST match Render env var
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,  // MUST match Render env var
      password: process.env.DB_PASS,  // MUST match Render env var
      database: process.env.DB_NAME,  // MUST match Render env var
      autoLoadEntities: true,
      synchronize: true,              // for development; use migrations in prod
      logging: true,                  // optional, useful for debugging
    }),
    VendorModule,
    PurchaseOrderModule,
    PaymentModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
