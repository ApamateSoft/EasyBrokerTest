import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { GetPropertiesCase } from './useCase/get.properties.case';
import { PropertyApi } from './infrastructure/api/property.api';
import { PropertyRemoteSourceImp } from './infrastructure/remoteSource/property.remote.source.imp';

@Module({
  controllers: [PropertiesController],
  providers: [
    PropertyApi,
    PropertiesService,
    PropertyRemoteSourceImp,
    {
      provide: 'PropertyApi',
      useFactory: () => {
        const propertyApi = new PropertyApi();
        propertyApi.setBaseUrl('https://api.stagingeb.com');
        propertyApi.setApiKey('l7u502p8v46ba3ppgvj5y2aad50lb9');
        return propertyApi;
      },
    },
    {
      provide: 'GetPropertiesCase',
      useFactory: (propertyRemoteSource: PropertyRemoteSourceImp) => {
        return new GetPropertiesCase(propertyRemoteSource);
      },
      inject: [PropertyRemoteSourceImp],
    },
  ],
})
export class PropertiesModule {}
