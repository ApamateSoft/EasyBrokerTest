import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { ResponsePropertyPageDto } from './dto/response-property-page.dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GetPropertyQuery } from './dto/get-property-query';
import { ResponseError } from './dto/response-error';

@ApiTags('ResponsePropertyPageDto')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Solicitud exitosa',
    type: ResponsePropertyPageDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request', type: ResponseError })
  @ApiUnauthorizedResponse({ description: 'Unauthorized', type: ResponseError })
  async findAll(
    @Query() query: GetPropertyQuery,
  ): Promise<ResponsePropertyPageDto> {
    try {
      return await this.propertiesService.findAll(query.page);
    } catch (e) {
      throw new HttpException(e.message, e.code);
    }
  }
}
