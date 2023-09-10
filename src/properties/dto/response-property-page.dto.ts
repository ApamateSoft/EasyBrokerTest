import { ApiProperty } from '@nestjs/swagger';

export class ResponsePropertyPageDto {
  @ApiProperty({ description: 'Tamaño de la paginación', example: 20 })
  size: number;
  @ApiProperty({ description: 'Página actual', example: 1 })
  currentPage: number;
  @ApiProperty({ description: 'Número total de elementos', example: 939 })
  totalItems: number;
  @ApiProperty({ description: 'Número total de paginas', example: 47 })
  pages: number;
  @ApiProperty({ description: 'Siguiente página', required: false, example: 2 })
  nextPage: number | null;
  @ApiProperty({
    description: 'Lista con los títulos de las propiedades',
    example: ['oficinas en renta Santa Maria la Ribera'],
  })
  properties: string[];
}
