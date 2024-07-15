import { IsString, IsNotEmpty } from 'class-validator';

export class uploadFileRequestDto {
  @IsString()
  @IsNotEmpty()
  file: string;
}
