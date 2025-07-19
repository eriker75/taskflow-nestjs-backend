import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsPhoneNumber,
  IsUrl,
} from 'class-validator';

/**
 * DTO for creating a user (by invitation or admin)
 */
export class CreateUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'invited@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Full name of the user',
    example: 'Jane Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Password for the user (optional, only if set by admin)',
    example: 'TempPassword123!',
    required: false,
    minLength: 8,
  })
  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;

  @ApiProperty({
    description: 'Phone number (optional)',
    example: '+584121234567',
    required: false,
  })
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string;

  @ApiProperty({
    description: 'Avatar URL (optional)',
    example: 'https://example.com/avatar.png',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiProperty({
    description: 'Job title (optional)',
    example: 'Frontend Developer',
    required: false,
  })
  @IsOptional()
  @IsString()
  jobTitle?: string;
}
