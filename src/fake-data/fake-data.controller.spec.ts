import { Test, TestingModule } from '@nestjs/testing';
import { FakeDataController } from './fake-data.controller';
import { FakeDataService } from './fake-data.service';

describe('FakeDataController', () => {
  let controller: FakeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakeDataController],
      providers: [FakeDataService],
    }).compile();

    controller = module.get<FakeDataController>(FakeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
