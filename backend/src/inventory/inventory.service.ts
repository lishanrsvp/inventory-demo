import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  create(data: Partial<Product>) {
    const product = this.productRepo.create(data);
    return this.productRepo.save(product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
