import { Inject, Injectable } from '@nestjs/common';
import { GetPropertiesCase } from './useCase/get.properties.case';
import { ResponsePropertyPageDto } from './dto/response-property-page.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('GetPropertiesCase')
    private readonly getPropertiesCase: GetPropertiesCase,
  ) {}

  async findAll(page: number): Promise<ResponsePropertyPageDto> {
    return this.getPropertiesCase.invoke(page);
  }
}
