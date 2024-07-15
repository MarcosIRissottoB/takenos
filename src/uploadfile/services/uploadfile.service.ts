import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ErrorManager } from '../../utils/error.manager';
import { Cloudinary } from '../interfaces/cloudinary.interface';
import { uploadFileResponseDto } from '../dto/uploadFileResponse.dto';

@Injectable()
export class UploadfileService {
  constructor(private cloudinary: CloudinaryService) {}

  async uploadImageToCloudinary(
    file: Express.Multer.File,
  ): Promise<uploadFileResponseDto> {
    try {
      const {
        width,
        height,
        format,
        resource_type,
        created_at,
        bytes,
        type,
        url,
        secure_url,
        asset_folder,
        display_name,
        original_filename,
      } = await this.cloudinary.uploadImage(file);
      return {
        statusCode: 200,
        message: 'Success',
        data: {
          width,
          height,
          format,
          resource_type,
          created_at,
          bytes,
          type,
          url,
          secure_url,
          asset_folder,
          display_name,
          original_filename,
        },
      };
    } catch (error) {
      throw new ErrorManager({
        type: 'BAD_REQUEST',
        message: 'Invalid file',
      });
    }
  }
}
