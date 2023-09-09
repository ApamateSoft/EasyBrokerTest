import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertyPage } from './domain/entities/property_page.entity';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async findAll(@Query() query: { page: number }): Promise<PropertyPage> {
    try {
      return await this.propertiesService.findAll(query.page);
    } catch (e) {
      throw new HttpException(e.message, e.code);
    }
  }
}
