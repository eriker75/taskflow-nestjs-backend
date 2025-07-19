import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNumber,
  Min,
  IsUrl,
} from 'class-validator';

enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_REVIEW = 'IN_REVIEW',
  COMPLETED = 'COMPLETED',
  BLOCKED = 'BLOCKED',
  CANCELED = 'CANCELED',
}

enum TaskPriority {
  BAJA = 'BAJA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
  URGENTE = 'URGENTE',
}

/**
 * DTO for creating a task in a project
 */
export class CreateTaskDto {
  @ApiProperty({
    description: 'Task title',
    example: 'Design login page',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Task description (optional)',
    example: 'Create a responsive login page for the app',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Task status (optional)',
    example: 'PENDING',
    required: false,
    enum: TaskStatus,
    default: 'PENDING',
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    description: 'Task priority',
    example: 'ALTA',
    enum: TaskPriority,
  })
  @IsEnum(TaskPriority)
  priority: TaskPriority;

  @ApiProperty({
    description: 'Due date (optional, ISO 8601 string)',
    example: '2025-12-31T23:59:59.000Z',
    required: false,
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({
    description: 'User ID assigned to the task (optional)',
    example: 'uuid-user-1234',
    required: false,
  })
  @IsOptional()
  @IsString()
  assignedToId?: string;

  @ApiProperty({
    description: 'Estimated hours for the task (optional)',
    example: 8,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedHours?: number;

  @ApiProperty({
    description: 'Image URL for the task (optional)',
    example: 'https://example.com/task-image.png',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
