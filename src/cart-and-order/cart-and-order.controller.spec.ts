import { Test, TestingModule } from '@nestjs/testing';
import { CartAndOrderController } from './cart-and-order.controller';

describe('CartAndOrderController', () => {
  let controller: CartAndOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartAndOrderController],
    }).compile();

    controller = module.get<CartAndOrderController>(CartAndOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
