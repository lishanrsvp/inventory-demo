import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Product } from './entities/product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
