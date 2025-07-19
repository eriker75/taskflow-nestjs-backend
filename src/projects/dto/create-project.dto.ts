import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsUrl,
  IsEnum,
  IsDateString,
  IsInt,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

enum ProjectStatus {
  ACTIVO = 'ACTIVO',
  COMPLETADO = 'COMPLETADO',
  PAUSADO = 'PAUSADO',
  CANCELADO = 'CANCELADO',
}

/**
 * DTO for creating a project
 */
export class CreateProjectDto {
  @ApiProperty({
    description: 'Project name',
    example: 'Trello Clone',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Project description (optional)',
    example: 'A kanban board app for teams',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Avatar URL for the project (optional)',
    example: 'https://example.com/project-avatar.png',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiProperty({
    description: 'Project status (optional)',
    example: 'ACTIVO',
    required: false,
    enum: ProjectStatus,
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

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
    description: 'Progress percentage (optional)',
    example: 50,
    required: false,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  progress?: number;

  @ApiProperty({
    description: 'Budget allocated (optional)',
    example: 1000.0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  budgetAllocated?: number;

  @ApiProperty({
    description: 'Budget spent (optional)',
    example: 200.0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  budgetSpent?: number;

  @ApiProperty({
    description: 'Team name (optional)',
    example: 'Frontend Team',
    required: false,
  })
  @IsOptional()
  @IsString()
  teamName?: string;

  @ApiProperty({
    description: 'Cover image URL (optional)',
    example: 'https://example.com/cover.png',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;
}
