import { Module } from '@nestjs/common';
import { FakeDataService } from './fake-data.service';
import { FakeDataController } from './fake-data.controller';
import { ParamTypeHandler } from 'handlers/param-type.handler';

@Module({
  imports: [ParamTypeHandler],
  controllers: [FakeDataController],
  providers: [FakeDataService],
})
export class FakeDataModule {}
