import { PropertyDto } from '../api/dto/property.dto';
import { propertyDto2PropertyPage } from './property.mapper';

describe('PropertyMapper', () => {
  it('all properties must be mapped', () => {
    const dto: PropertyDto = {
      pagination: {
        limit: 20,
        page: 1,
        total: 939,
      },
      content: [
        { title: 'oficinas en renta Santa Maria la Ribera' },
        { title: 'Departamento en venta Tecamachalco 4 recamaras' },
        { title: 'PH en venta colonia del valle con terraza' },
        { title: 'Departamento en venta colonia del valle' },
        { title: 'epartamento en venta colonia del valle' },
        { title: 'oficinas en renta Santa  Maria la Ribera' },
        { title: 'Departamento en venta Tecamachalco' },
        { title: 'Departamento en venta Tecamachalco 4 recamaras' },
        { title: 'PH en venta colonia del valle con terraza' },
        { title: 'Departamento en venta colonia del valle' },
        { title: 'oficinas en renta Santa  Maria la Ribera' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE PONIENTE' },
        { title: 'test' },
        { title: 'test' },
        { title: 'test' },
        { title: 'Departamento en renta Escandon"' },
        { title: 'Departamento en venta Tecamachalco' },
        { title: 'DEPARTAMENTO EN RENTA EN EL AGUACATAL EN VALLE PONIENTE' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA ' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA ' },
      ],
    };

    const propertyPage = propertyDto2PropertyPage(dto);

    expect(dto.content.length).toBe(propertyPage.properties.length);
  });

  it('if the page is greater than the number of pages nextPage should be null', () => {
    const dto: PropertyDto = {
      pagination: {
        limit: 20,
        page: 50,
        total: 939,
      },
      content: [
        { title: 'oficinas en renta Santa Maria la Ribera' },
        { title: 'Departamento en venta Tecamachalco 4 recamaras' },
        { title: 'PH en venta colonia del valle con terraza' },
        { title: 'Departamento en venta colonia del valle' },
        { title: 'epartamento en venta colonia del valle' },
        { title: 'oficinas en renta Santa  Maria la Ribera' },
        { title: 'Departamento en venta Tecamachalco' },
        { title: 'Departamento en venta Tecamachalco 4 recamaras' },
        { title: 'PH en venta colonia del valle con terraza' },
        { title: 'Departamento en venta colonia del valle' },
        { title: 'oficinas en renta Santa  Maria la Ribera' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE PONIENTE' },
        { title: 'test' },
        { title: 'test' },
        { title: 'test' },
        { title: 'Departamento en renta Escandon"' },
        { title: 'Departamento en venta Tecamachalco' },
        { title: 'DEPARTAMENTO EN RENTA EN EL AGUACATAL EN VALLE PONIENTE' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA ' },
        { title: 'DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA ' },
      ],
    };

    const propertyPage = propertyDto2PropertyPage(dto);

    expect(null).toBe(propertyPage.nextPage);
  });
});
