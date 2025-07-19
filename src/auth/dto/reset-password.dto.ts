import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * DTO for resetting password
 */
export class ResetPasswordDto {
  @ApiProperty({
    description: 'Password reset token received by email',
    example: 'reset-token-uuid',
  })
  @IsString()
  token: string;

  @ApiProperty({
    description: 'New password',
    example: 'NewStrongPassword123!',
    minLength: 8,
  })
  @IsString()
  newPassword: string;
}
