import { Expose } from 'class-transformer';
import { Cloudinary } from '../interfaces/cloudinary.interface';

export class uploadFileResponseDto {
  @Expose()
  status: string;

  @Expose()
  error: object | null;

  @Expose()
  data: Cloudinary | null;
}
