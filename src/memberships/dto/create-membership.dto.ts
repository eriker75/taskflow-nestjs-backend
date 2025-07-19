import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';

enum ParticipantRole {
  CREADOR = 'CREADOR',
  MANAGER = 'MANAGER',
  MIEMBRO = 'MIEMBRO',
}

/**
 * DTO for inviting/adding a member to a project
 */
export class CreateMembershipDto {
  @ApiProperty({
    description: 'User ID to add as a member',
    example: 'uuid-user-1234',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Role of the member in the project',
    example: 'MIEMBRO',
    enum: ParticipantRole,
    default: 'MIEMBRO',
  })
  @IsEnum(ParticipantRole)
  role: ParticipantRole;
}
