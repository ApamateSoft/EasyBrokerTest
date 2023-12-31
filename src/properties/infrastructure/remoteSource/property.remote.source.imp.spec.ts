import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { PropertyApi } from '../api/property.api';
import { PropertyRemoteSourceImp } from './property.remote.source.imp';
import { PropertyRemoteSource } from '../../data/property.remote.source';
import { BadRequestError } from '../../domain/errors/bad.request.error';
import { UnauthorizedError } from '../../domain/errors/unauthorized.error';

const url = 'https://api.stagingeb.com/v1/properties';

const successHandler = rest.get(url, (req, res, ctx) => {
  return res(
    ctx.json({
      pagination: {
        limit: 20,
        page: 1,
        total: 939,
        next_page: 'https://api.stagingeb.com/v1/properties?limit=20&page=2',
      },
      content: [
        {
          public_id: 'EB-D8514',
          title: 'oficinas en renta Santa Maria la Ribera',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48514/276842/EB-D8514.jpg?version=1662930695',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48514/276842/EB-D8514_thumb.jpg?version=1662930695',
          location: 'Atlampa, Cuauhtémoc, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 260000.0,
              currency: 'MXN',
              formatted_amount: '$260,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: null,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Oficina',
          lot_size: 1200.0,
          construction_size: 2400.0,
          updated_at: '2023-02-10T13:32:58-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8505',
          title: 'Departamento en venta Tecamachalco 4 recamaras',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48505/276717/EB-D8505.jpg?version=1662930567',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48505/276717/EB-D8505_thumb.jpg?version=1662930567',
          location:
            'Lomas de Tecamachalco, Naucalpan de Juárez, Estado De México',
          operations: [
            {
              type: 'sale',
              amount: 32500000.0,
              currency: 'MXN',
              formatted_amount: '$32,500,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 505.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8506',
          title: 'PH en venta colonia del valle con terraza',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48506/276705/EB-D8506.jpg?version=1662930561',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48506/276705/EB-D8506_thumb.jpg?version=1662930561',
          location: 'Del Valle Centro, Benito Juárez, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 8900000.0,
              currency: 'MXN',
              formatted_amount: '$8,900,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 187.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8507',
          title: 'Departamento en venta colonia del valle',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48507/276718/EB-D8507.jpg?version=1662930568',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48507/276718/EB-D8507_thumb.jpg?version=1662930568',
          location: 'Del Valle Centro, Benito Juárez, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 7450000.0,
              currency: 'MXN',
              formatted_amount: '$7,450,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 127.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8508',
          title: 'oficinas en renta Santa  Maria la Ribera',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48508/276740/EB-D8508.jpg?version=1662930574',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48508/276740/EB-D8508_thumb.jpg?version=1662930574',
          location: 'Atlampa, Cuauhtémoc, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 260000.0,
              currency: 'MXN',
              formatted_amount: '$260,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: null,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Oficina',
          lot_size: 1200.0,
          construction_size: 2400.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8509',
          title: 'Departamento en venta Tecamachalco',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48509/276764/EB-D8509.jpg?version=1662930641',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48509/276764/EB-D8509_thumb.jpg?version=1662930641',
          location:
            'Lomas de Tecamachalco, Naucalpan de Juárez, Estado De México',
          operations: [
            {
              type: 'sale',
              amount: 10500000.0,
              currency: 'MXN',
              formatted_amount: '$10,500,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 205.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8510',
          title: 'Departamento en venta Tecamachalco 4 recamaras',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48510/276772/EB-D8510.jpg?version=1662930644',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48510/276772/EB-D8510_thumb.jpg?version=1662930644',
          location:
            'Lomas de Tecamachalco, Naucalpan de Juárez, Estado De México',
          operations: [
            {
              type: 'sale',
              amount: 32500000.0,
              currency: 'MXN',
              formatted_amount: '$32,500,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 505.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8511',
          title: 'PH en venta colonia del valle con terraza',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48511/276796/EB-D8511.jpg?version=1662930651',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48511/276796/EB-D8511_thumb.jpg?version=1662930651',
          location: 'Del Valle Centro, Benito Juárez, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 8900000.0,
              currency: 'MXN',
              formatted_amount: '$8,900,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 187.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8512',
          title: 'Departamento en venta colonia del valle',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48512/276822/EB-D8512.jpg?version=1662930659',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48512/276822/EB-D8512_thumb.jpg?version=1662930659',
          location: 'Del Valle Centro, Benito Juárez, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 7450000.0,
              currency: 'MXN',
              formatted_amount: '$7,450,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 127.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8513',
          title: 'oficinas en renta Santa  Maria la Ribera',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48513/276826/EB-D8513.jpg?version=1662930660',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48513/276826/EB-D8513_thumb.jpg?version=1662930660',
          location: 'Atlampa, Cuauhtémoc, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 260000.0,
              currency: 'MXN',
              formatted_amount: '$260,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: null,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Oficina',
          lot_size: 1200.0,
          construction_size: 2400.0,
          updated_at: '2023-02-10T13:32:59-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-C6399',
          title: 'DEPARTAMENTO EN RENTA EN VALLE PONIENTE',
          title_image_full:
            'https://assets.stagingeb.com/property_images/36399/126906/EB-C6399.jpg?version=1611968409',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/36399/126906/EB-C6399_thumb.jpg?version=1611968409',
          location: 'Zona Valle Poniente, San Pedro Garza García, Nuevo León',
          operations: [
            {
              type: 'rental',
              amount: 20000.0,
              currency: 'MXN',
              formatted_amount: '$20,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 2,
          bathrooms: null,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 0.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D7340',
          title: 'test',
          title_image_full: null,
          title_image_thumb: null,
          location: 'Real de Tesistán, Zapopan, Jalisco',
          operations: [
            {
              type: 'rental',
              amount: 20000.0,
              currency: 'MXN',
              formatted_amount: '$20,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 1,
          bathrooms: 1,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 0.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: true,
        },
        {
          public_id: 'EB-D7341',
          title: 'test',
          title_image_full: null,
          title_image_thumb: null,
          location: 'Porta Real, Zapopan, Jalisco',
          operations: [
            {
              type: 'rental',
              amount: 20000.0,
              currency: 'MXN',
              formatted_amount: '$20,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 1,
          bathrooms: 1,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 0.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: true,
        },
        {
          public_id: 'EB-D7345',
          title: 'test',
          title_image_full: null,
          title_image_thumb: null,
          location: 'Viveros del Valle, Zapopan, Jalisco',
          operations: [
            {
              type: 'rental',
              amount: 20000.0,
              currency: 'MXN',
              formatted_amount: '$20,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 1,
          bathrooms: 1,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 0.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: true,
        },
        {
          public_id: 'EB-D8503',
          title: 'Departamento en renta Escandon',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48503/276663/EB-D8503.jpeg?version=1662930249',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48503/276663/EB-D8503_thumb.jpeg?version=1662930249',
          location: 'Polanco, Miguel Hidalgo, Ciudad de México',
          operations: [
            {
              type: 'sale',
              amount: 18000.0,
              currency: 'MXN',
              formatted_amount: '$18,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 1,
          bathrooms: 1,
          parking_spaces: 2,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 64.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-D8504',
          title: 'Departamento en venta Tecamachalco',
          title_image_full:
            'https://assets.stagingeb.com/property_images/48504/276686/EB-D8504.jpg?version=1662930543',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/48504/276686/EB-D8504_thumb.jpg?version=1662930543',
          location:
            'Lomas de Tecamachalco, Naucalpan de Juárez, Estado De México',
          operations: [
            {
              type: 'sale',
              amount: 10500000.0,
              currency: 'MXN',
              formatted_amount: '$10,500,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 0,
          bathrooms: null,
          parking_spaces: null,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 205.0,
          updated_at: '2023-02-10T13:33:00-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-C6349',
          title: 'DEPARTAMENTO EN RENTA EN EL AGUACATAL EN VALLE PONIENTE',
          title_image_full:
            'https://assets.stagingeb.com/property_images/36349/126557/EB-C6349.jpg?version=1611968228',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/36349/126557/EB-C6349_thumb.jpg?version=1611968228',
          location: 'El Aguacatal, Santa Catarina, Nuevo León',
          operations: [
            {
              type: 'rental',
              amount: 33200.0,
              currency: 'MXN',
              formatted_amount: '$33,200',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 2,
          bathrooms: null,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 113.0,
          updated_at: '2023-02-10T13:33:01-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-C6355',
          title:
            'DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA GARCIA',
          title_image_full:
            'https://assets.stagingeb.com/property_images/36355/126594/EB-C6355.jpg?version=1611968258',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/36355/126594/EB-C6355_thumb.jpg?version=1611968258',
          location: 'Del Valle Oriente, San Pedro Garza García, Nuevo León',
          operations: [
            {
              type: 'rental',
              amount: 38000.0,
              currency: 'MXN',
              formatted_amount: '$38,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 2,
          bathrooms: null,
          parking_spaces: 2,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 125.0,
          updated_at: '2023-02-10T13:33:01-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-C6370',
          title: 'DEPARTAMENTO EN RENTA EN VALLE PONIENTE',
          title_image_full:
            'https://assets.stagingeb.com/property_images/36370/126731/EB-C6370.jpg?version=1611968335',
          title_image_thumb:
            'https://assets.stagingeb.com/property_images/36370/126731/EB-C6370_thumb.jpg?version=1611968335',
          location: 'Zona Valle Poniente, San Pedro Garza García, Nuevo León',
          operations: [
            {
              type: 'rental',
              amount: 28000.0,
              currency: 'MXN',
              formatted_amount: '$28,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 2,
          bathrooms: 1,
          parking_spaces: 2,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 95.0,
          updated_at: '2023-02-10T13:33:01-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
        {
          public_id: 'EB-C6606',
          title: 'DEPARTAMENTO EN RENTA EN NUEVO SUR EN MONTERREY',
          title_image_full: null,
          title_image_thumb: null,
          location: 'Nuevo Sur, Guadalajara, Jalisco',
          operations: [
            {
              type: 'rental',
              amount: 18000.0,
              currency: 'MXN',
              formatted_amount: '$18,000',
              commission: {
                type: 'percentage',
              },
              unit: 'total',
            },
          ],
          bedrooms: 1,
          bathrooms: null,
          parking_spaces: 1,
          property_type: 'Departamento',
          lot_size: 0.0,
          construction_size: 47.0,
          updated_at: '2023-02-10T13:33:01-06:00',
          agent: null,
          show_prices: true,
          share_commission: false,
        },
      ],
    }),
  );
});

const badRequestHandler = rest.get(url, (req, res, ctx) => {
  return res(
    ctx.status(400),
    ctx.json({
      error: 'The properties statuses format is invalid',
    }),
  );
});

const unauthorizedHandler = rest.get(url, (req, res, ctx) => {
  return res(
    ctx.status(401),
    ctx.json({
      error: 'Your API key is invalid',
    }),
  );
});

describe('PropertyRemoteSourceImp', () => {
  const server = setupServer(successHandler);
  const propertyApi = new PropertyApi();
  propertyApi.setBaseUrl('https://api.stagingeb.com');
  propertyApi.setApiKey('l7u502p8v46ba3ppgvj5y2aad50lb9');
  const propertyRemoteSource: PropertyRemoteSource =
    new PropertyRemoteSourceImp(propertyApi);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('After a successful query, the json must be mapped to dto', async () => {
    const result = await propertyRemoteSource.getProperties(1);
    expect(20).toBe(result.properties.length);
  });

  it('in case of a 400 a BadRequestError is expected', async () => {
    server.use(badRequestHandler);
    try {
      await propertyRemoteSource.getProperties(1);
      fail('BadRequestError expected');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestError);
      expect('The properties statuses format is invalid').toBe(e.message);
    }
  });

  it('in case of a 401 a UnauthorizedError is expected', async () => {
    server.use(unauthorizedHandler);
    try {
      await propertyRemoteSource.getProperties(1);
      fail('UnauthorizedError expected');
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedError);
      expect('Your API key is invalid').toBe(e.message);
    }
  });
});
