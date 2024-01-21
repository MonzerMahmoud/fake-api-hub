import { Controller, Post, Body } from '@nestjs/common';
import { FakeDataService } from './fake-data.service';

@Controller('fake-data')
export class FakeDataController {
  constructor(private readonly fakeDataService: FakeDataService) {}

  @Post('generate')
  create(@Body() model: Record<string, any>) {
    return this.fakeDataService.generate(model);
  }
}
