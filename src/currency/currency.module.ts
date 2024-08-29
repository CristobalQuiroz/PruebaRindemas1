import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Asegúrate de que ConfigModule esté importado
    HttpModule,
  ],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
