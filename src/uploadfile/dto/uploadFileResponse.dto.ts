import { Expose } from 'class-transformer';
import { Cloudinary } from '../interfaces/cloudinary.interface';

export class uploadFileResponseDto {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  data?: Cloudinary | null;
}
