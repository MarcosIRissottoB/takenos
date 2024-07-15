import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}
  public async apiFindAll(url, config?: AxiosRequestConfig) {
    try {
      const { data } = await firstValueFrom(this.httpService.get(url, config));
      return data;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
