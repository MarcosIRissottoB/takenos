import { Module } from '@nestjs/common';
import { UploadfileService } from './services/uploadfile.service';
import { UploadfileController } from './uploadfile.controller';
import { CloudinaryService } from './services/cloudinary.service';
import { CloudinaryProvider } from './providers/cloudinary.provider';

@Module({
  providers: [UploadfileService, CloudinaryService, CloudinaryProvider],
  controllers: [UploadfileController],
  exports: [CloudinaryProvider, CloudinaryService, UploadfileService],
})
export class UploadfileModule {}
