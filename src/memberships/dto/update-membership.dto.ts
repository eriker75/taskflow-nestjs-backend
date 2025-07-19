import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';

enum ParticipantRole {
  CREADOR = 'CREADOR',
  MANAGER = 'MANAGER',
  MIEMBRO = 'MIEMBRO',
}

/**
 * DTO for updating a project member's role
 */
export class UpdateMembershipDto {
  @ApiPropertyOptional({
    description: 'Role of the member in the project (optional)',
    example: 'MANAGER',
    enum: ParticipantRole,
  })
  @IsOptional()
  @IsEnum(ParticipantRole)
  role?: ParticipantRole;
}
