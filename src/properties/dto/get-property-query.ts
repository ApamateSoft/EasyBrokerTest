import { ApiProperty } from '@nestjs/swagger';

export class GetPropertyQuery {
  @ApiProperty({
    description: 'Página a solicitar',
    example: 2,
    default: 1,
    required: false,
  })
  page: number;
}
