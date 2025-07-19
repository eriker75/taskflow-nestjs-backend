import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsUrl,
  IsEnum,
  IsDateString,
  IsInt,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

export enum ProjectStatus {
  ACTIVO = 'ACTIVO',
  COMPLETADO = 'COMPLETADO',
  PAUSADO = 'PAUSADO',
  CANCELADO = 'CANCELADO',
}

/**
 * DTO for updating a project
 */
export class UpdateProjectDto {
  @ApiPropertyOptional({
    description: 'Project name (optional)',
    example: 'Updated Project Name',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Project description (optional)',
    example: 'Updated description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Avatar URL for the project (optional)',
    example: 'https://example.com/project-avatar.png',
  })
  @IsOptional()
  @IsUrl()
  avatarUrl?: string;

  @ApiPropertyOptional({
    description: 'Project status (optional)',
    example: 'COMPLETADO',
    enum: ProjectStatus,
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiPropertyOptional({
    description: 'Due date (optional, ISO 8601 string)',
    example: '2025-12-31T23:59:59.000Z',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({
    description: 'Progress percentage (optional)',
    example: 80,
    minimum: 0,
    maximum: 100,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  progress?: number;

  @ApiPropertyOptional({
    description: 'Budget allocated (optional)',
    example: 1500.0,
  })
  @IsOptional()
  @IsNumber()
  budgetAllocated?: number;

  @ApiPropertyOptional({
    description: 'Budget spent (optional)',
    example: 500.0,
  })
  @IsOptional()
  @IsNumber()
  budgetSpent?: number;

  @ApiPropertyOptional({
    description: 'Team name (optional)',
    example: 'Backend Team',
  })
  @IsOptional()
  @IsString()
  teamName?: string;

  @ApiPropertyOptional({
    description: 'Cover image URL (optional)',
    example: 'https://example.com/cover.png',
  })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;
}
