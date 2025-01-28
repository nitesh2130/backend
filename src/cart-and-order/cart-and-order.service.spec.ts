import { Test, TestingModule } from '@nestjs/testing';
import { CartAndOrderService } from './cart-and-order.service';

describe('CartAndOrderService', () => {
  let service: CartAndOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartAndOrderService],
    }).compile();

    service = module.get<CartAndOrderService>(CartAndOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
