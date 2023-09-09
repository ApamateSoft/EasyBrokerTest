import { GetPropertiesCase } from './get.properties.case';
import { PropertyRemoteSource } from '../data/property.remote.source';
import { Mock, It } from 'moq.ts';
import { PropertyPage } from '../domain/entities/property_page.entity';
import { BadRequestError } from '../domain/errors/bad.request.error';
import { UnauthorizedError } from '../domain/errors/unauthorized.error';

describe('GetPropertiesCase test', () => {
  let propertyRemoteSource: PropertyRemoteSource;
  let getPropertiesCase: GetPropertiesCase;

  it('In a successful case it should return two properties', async () => {
    const propertyPage: PropertyPage = {
      size: 4,
      currentPage: 1,
      totalItems: 4,
      pages: 2,
      nextPage: 2,
      properties: ['Lorem', 'Ipsum'],
    };

    propertyRemoteSource = new Mock<PropertyRemoteSource>()
      .setup((instance) => instance.getProperties(It.IsAny()))
      .returnsAsync(propertyPage)
      .object();
    getPropertiesCase = new GetPropertiesCase(propertyRemoteSource);

    const response = await getPropertiesCase.invoke();

    expect(2).toBe(response.properties.length);
  });

  it('In case of 400 a BadRequestError must be returned', async () => {
    const exception = new BadRequestError();

    propertyRemoteSource = new Mock<PropertyRemoteSource>()
      .setup((instance) => instance.getProperties(It.IsAny()))
      .throwsAsync(exception)
      .object();
    getPropertiesCase = new GetPropertiesCase(propertyRemoteSource);

    try {
      await getPropertiesCase.invoke();
      fail('BadRequestError expected');
    } catch (e) {
      expect(e).toBe(exception);
    }
  });

  it('In case of 401 a UnauthorizedError must be returned', async () => {
    const exception = new UnauthorizedError();

    propertyRemoteSource = new Mock<PropertyRemoteSource>()
      .setup((instance) => instance.getProperties(It.IsAny()))
      .throwsAsync(exception)
      .object();
    getPropertiesCase = new GetPropertiesCase(propertyRemoteSource);

    try {
      await getPropertiesCase.invoke();
      fail('BadRequestError expected');
    } catch (e) {
      expect(e).toBe(exception);
    }
  });
});
