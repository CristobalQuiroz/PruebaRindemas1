import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CurrencyModule } from './currency/currency.module'; // Asegúrate de la ruta correcta

@Module({
  imports: [
    ConfigModule.forRoot(), // Configura el ConfigModule para cargar variables de entorno
    HttpModule,
    CurrencyModule, // Importa el módulo de Currency
  ],
})
export class AppModule {}
