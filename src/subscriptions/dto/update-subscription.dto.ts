import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

/**
 * DTO for updating a subscription (change plan, cancel, etc.)
 */
export class UpdateSubscriptionDto {
  @ApiPropertyOptional({
    description: 'Stripe plan ID to change to (optional)',
    example: 'price_1Nyyyyyyy',
  })
  @IsOptional()
  @IsString()
  plan?: string;

  @ApiPropertyOptional({
    description: 'Subscription status (optional)',
    example: 'canceled',
  })
  @IsOptional()
  @IsString()
  status?: string;
}
