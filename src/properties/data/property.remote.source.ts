import { PropertyPage } from '../domain/entities/property_page.entity';

export interface PropertyRemoteSource {
  getProperties(page: number): Promise<PropertyPage>;
}
