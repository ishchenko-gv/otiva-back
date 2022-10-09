import { Injectable } from '@nestjs/common';

import { CreateAdDto } from './dto/create-ad.dto';
import { Ad } from './interface/ad.interface';

@Injectable()
export class AdsService {
  ads: Ad[] = [];

  findAll() {
    return this.ads;
  }

  create(ad: CreateAdDto) {
    const result = {
      id: this.ads.length,
      ...ad
    };

    this.ads.push(result);

    return result;
  }

  delete(id: number) {
    this.ads = this.ads.filter((ad) => ad.id !== id);
  }
}
