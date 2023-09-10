import { ApiProperty } from '@nestjs/swagger';

export class ResponseError {
  @ApiProperty({
    description: 'Código del error',
  })
  statusCode: number;
  @ApiProperty({
    description: 'Mensaje del error',
  })
  message: string;
}
