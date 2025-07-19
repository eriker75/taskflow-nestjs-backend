import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * DTO for creating a subscription (Stripe checkout session)
 */
export class CreateSubscriptionDto {
  @ApiProperty({
    description: 'Stripe plan ID to subscribe to',
    example: 'price_1Nxxxxxxx',
  })
  @IsString()
  plan: string;
}
