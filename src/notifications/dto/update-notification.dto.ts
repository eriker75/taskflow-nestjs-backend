import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

/**
 * DTO for updating a notification
 */
export class UpdateNotificationDto {
  @ApiPropertyOptional({
    description: 'User ID to notify (optional)',
    example: 'uuid-user-1234',
  })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiPropertyOptional({
    description: 'Notification title (optional)',
    example: 'Task completed',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Notification description (optional)',
    example: 'Your assigned task has been completed.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Mark notification as read (optional)',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  read?: boolean;
}
