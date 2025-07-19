import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

/**
 * DTO for updating authenticated user (profile)
 */
export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @ApiPropertyOptional({
    description: 'New password (optional, min 8 characters)',
    example: 'NewStrongPassword123!',
    minLength: 8,
  })
  @IsString()
  password?: string;

  @ApiPropertyOptional({
    description: 'Full name of the user (optional)',
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Phone number (optional)',
    example: '+584121234567',
  })
  @IsString()
  @IsPhoneNumber()
  phoneNumber?: string;
}
