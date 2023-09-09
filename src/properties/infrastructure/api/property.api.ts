import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { PropertyDto } from './dto/property.dto';

@Injectable()
export class PropertyApi {
  ENDPOINT = '/v1/properties';

  #baseUrl: string;
  #apiKey: string;

  setBaseUrl(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  setApiKey(apiKey: string) {
    this.#apiKey = apiKey;
  }

  getProperties(page: number): Promise<AxiosResponse<PropertyDto, any>> {
    const config: AxiosRequestConfig = {
      headers: {
        'X-Authorization': this.#apiKey,
        accpet: 'application/json',
      },
    };
    const url = `${this.#baseUrl}${this.ENDPOINT}?limit=20&page=${page}`;
    return axios.get(url, config);
  }
}
