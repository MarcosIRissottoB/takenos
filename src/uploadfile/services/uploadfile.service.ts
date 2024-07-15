import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ErrorManager } from 'src/utils/error.manager';
import { Cloudinary } from '../interfaces/cloudinary.interface';

@Injectable()
export class UploadfileService {
  constructor(private cloudinary: CloudinaryService) {}

  async uploadImageToCloudinary(
    file: Express.Multer.File,
  ): Promise<Cloudinary> {
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
      };
    } catch (error) {
      throw new ErrorManager({
        type: 'BAD_REQUEST',
        message: 'Invalid file',
      });
    }
  }
}
