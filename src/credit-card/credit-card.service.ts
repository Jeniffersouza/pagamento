import { Injectable } from '@nestjs/common';
import { CreditCard, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreditCardService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CreditCardCreateInput): Promise<CreditCard> {
    return await this.prisma.creditCard.create({
      data: { ...data },
    });
  }
}
