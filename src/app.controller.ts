import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { PaymentPaginationType } from 'FindAll.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Post()
  async findAll(
    @TypedBody()
    paginationQuery: PaymentPaginationType,
  ) {
    console.log(paginationQuery.where);
    
    return `It's working!`;
  }
}
