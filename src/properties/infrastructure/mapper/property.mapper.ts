import { PropertyPage } from '../../domain/entities/property_page.entity';
import { PropertyDto } from '../api/dto/property.dto';

export function propertyDto2PropertyPage(dto: PropertyDto): PropertyPage {
  const size: number = dto.pagination.limit;
  const totalItems: number = dto.pagination.total;
  const pages: number = Math.ceil(totalItems / size);
  const currentPage: number = dto.pagination.page;
  const nextPage: number | null = currentPage >= pages ? null : currentPage + 1;

  return {
    size,
    currentPage,
    totalItems,
    pages: pages,
    nextPage,
    properties: dto.content.map((it: any) => it.title),
  };
}
