import { PropertyRemoteSource } from '../data/property.remote.source';
import { PropertyPage } from '../domain/entities/property_page.entity';

export class GetPropertiesCase {
  constructor(private readonly propertyRemoteSource: PropertyRemoteSource) {}

  invoke(page: number = 1): Promise<PropertyPage> {
    return this.propertyRemoteSource.getProperties(page);
  }
}
