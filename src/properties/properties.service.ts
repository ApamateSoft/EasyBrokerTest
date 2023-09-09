import { Inject, Injectable } from '@nestjs/common';
import { PropertyPage } from './domain/entities/property_page.entity';
import { GetPropertiesCase } from './useCase/get.properties.case';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('GetPropertiesCase')
    private readonly getPropertiesCase: GetPropertiesCase,
  ) {}

  async findAll(page: number): Promise<PropertyPage> {
    return this.getPropertiesCase.invoke(page);
  }
}
