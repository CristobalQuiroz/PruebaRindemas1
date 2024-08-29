import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('convert')
  async getConvertedAmount(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('amount') amount: number,
    @Query('date') date?: string,
  ) {
    return this.currencyService.getConvertedAmount(from, to, amount, date);
  }
}
