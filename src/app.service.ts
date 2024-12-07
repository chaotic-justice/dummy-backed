import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'magician from iceberg';
  }

  getByte(): string {
    return 'autumn wontons????';
  }
}
