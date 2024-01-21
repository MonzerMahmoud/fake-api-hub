import { Module } from '@nestjs/common';
import { FakeDataService } from './fake-data.service';
import { FakeDataController } from './fake-data.controller';

@Module({
  controllers: [FakeDataController],
  providers: [FakeDataService],
})
export class FakeDataModule {}
