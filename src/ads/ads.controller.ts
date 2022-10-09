import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AdsService } from './ads.service';

import { CreateAdDto } from './dto/create-ad.dto';
import { Ad } from './interface/ad.interface';

@Controller('ads')
export class AdsController {
  constructor(private adsService: AdsService) {}

  ads: Ad[] = [];

  @Get()
  findAll() {
    return this.adsService.findAll();
  }

  @Post()
  create(@Body() body: CreateAdDto) {
    this.adsService.create(body);

    return body;
  }

  @Delete()
  delete(@Body() body: { id: number }) {
    this.adsService.delete(body.id);
  }
}
