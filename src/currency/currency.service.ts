import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CurrencyService {
  private readonly fixerApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.fixerApiKey = "b20c9b8f8f-33f62790ab-siyntw";
  }

  async getConvertedAmount(from: string, to: string, amount: number, date?: string): Promise<any> {
    const params: any = {
        api_key: this.fixerApiKey,
      from,
      to,
      amount,
    };

    if (date) {
      params.date = date;
    }

    try {
      const response = await lastValueFrom(this.httpService.get('https://api.fastforex.io/convert', { params }));
      
      // Log de la respuesta para depuración
      console.log('API Response:', response.data);

      if (response.data) {
        return response.data.result;
      } else {
        const errorType = response.data.error?.type || 'Unknown error';
        throw new Error(`API Error: ${errorType}`);
      }
    } catch (error) {
      console.error('Error fetching currency data:', error.response?.data || error.message);
      throw new InternalServerErrorException('Failed to fetch currency data');
    }
  }
}
