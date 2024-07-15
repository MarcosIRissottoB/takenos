import { Test, TestingModule } from '@nestjs/testing';
import { UploadfileService } from './uploadfile.service';
import { CloudinaryProvider } from '../providers/cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';

describe('UploadfileService', () => {
  let uploadfileService: UploadfileService;
  let cloudinaryService: CloudinaryService;
  // let cloudinaryProvider: CloudinaryProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadfileService, CloudinaryService],
    }).compile();

    uploadfileService = module.get<UploadfileService>(UploadfileService);
  });

  it('should be defined', () => {
    expect(uploadfileService).toBeDefined();
  });
});
