import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

/**
 * DTO for forgot password request
 */
export class ForgotPasswordDto {
  @ApiProperty({
    description: 'User email address to send password reset link',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  email: string;
}
