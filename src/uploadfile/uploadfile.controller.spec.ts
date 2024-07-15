import { Test, TestingModule } from '@nestjs/testing';
import { UploadfileController } from './uploadfile.controller';
import { UploadfileService } from './services/uploadfile.service';
import { CloudinaryService } from './services/cloudinary.service';
import { CloudinaryProvider } from './providers/cloudinary.provider';

describe('UploadfileController', () => {
  let controller: UploadfileController;
  let uploadfileService: UploadfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadfileController],
      providers: [UploadfileService, CloudinaryService, CloudinaryProvider],
    }).compile();

    controller = module.get<UploadfileController>(UploadfileController);
    uploadfileService = module.get<UploadfileService>(UploadfileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
