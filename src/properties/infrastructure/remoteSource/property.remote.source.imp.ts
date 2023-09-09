import { PropertyRemoteSource } from '../../data/property.remote.source';
import { Inject, Injectable } from '@nestjs/common';
import { PropertyPage } from '../../domain/entities/property_page.entity';
import { PropertyApi } from '../api/property.api';
import { BadRequestError } from '../../domain/errors/bad.request.error';
import { UnauthorizedError } from '../../domain/errors/unauthorized.error';
import { propertyDto2PropertyPage } from '../mapper/property.mapper';

@Injectable()
export class PropertyRemoteSourceImp implements PropertyRemoteSource {
  constructor(
    @Inject('PropertyApi') private readonly propertyApi: PropertyApi,
  ) {}

  async getProperties(page: number): Promise<PropertyPage> {
    try {
      const result = await this.propertyApi.getProperties(page);
      return propertyDto2PropertyPage(result.data);
    } catch ({ response }) {
      const errorMsg = response.data.error;
      if (response.status == 400) throw new BadRequestError(errorMsg);

      if (response.status == 401) throw new UnauthorizedError(errorMsg);
    }
  }
}
