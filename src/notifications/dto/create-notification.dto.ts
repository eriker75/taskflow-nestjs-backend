import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * DTO for creating a notification
 */
export class CreateNotificationDto {
  @ApiProperty({
    description: 'User ID to notify',
    example: 'uuid-user-1234',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Notification title',
    example: 'Task assigned',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Notification description',
    example: 'You have been assigned to a new task.',
  })
  @IsString()
  description: string;
}
