import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadfileService } from './services/uploadfile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { uploadFileResponseDto } from './dto/uploadFileResponse.dto';

@ApiTags('Uploadfile')
@Controller('uploadfile')
export class UploadfileController {
  constructor(private readonly uploadfileService: UploadfileService) {}
  @Post('upload')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
          new FileTypeValidator({ fileType: '.(png|jpg|pdf)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<uploadFileResponseDto> {
    return await this.uploadfileService.uploadImageToCloudinary(file);
  }
}
