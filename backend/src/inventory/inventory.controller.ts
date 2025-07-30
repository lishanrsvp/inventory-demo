import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('products')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Post()
  create(@Body() body: { name: string; stock: number }) {
    return this.inventoryService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
