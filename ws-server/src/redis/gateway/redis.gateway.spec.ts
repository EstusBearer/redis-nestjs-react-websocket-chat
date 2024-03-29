import { Test, TestingModule } from '@nestjs/testing';
import { RedisGateway } from './redis.gateway';

describe('RedisGateway', () => {
  let gateway: RedisGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisGateway],
    }).compile();

    gateway = module.get<RedisGateway>(RedisGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
