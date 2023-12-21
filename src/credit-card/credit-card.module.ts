import { Module } from '@nestjs/common';
import { CreditCardController } from './credit-card.controller';
import { CreditCardService } from './credit-card.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CreditCardController],
  providers: [CreditCardService, PrismaService],
})
export class CreditCardModule {}
