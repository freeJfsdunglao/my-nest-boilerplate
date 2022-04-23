import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationsService {
	constructor(private readonly configService: ConfigService) {}

	/**
	 * DOCUMENTATION: https://docs.nestjs.com/techniques/configuration#custom-getter-functions
	 */
	get isUsingRabbitMQ(): boolean {
		return this.configService.get('USE_RABBITMQ') === 'true';
	}

	get portNumber(): number {
		return this.configService.get('PORT');
	}

	get applicationLevel(): string {
		return this.configService.get('NODE_ENV');
	}

	get rabbitMQURL(): string {
		return this.configService.get('RABBITMQ_URL');
	}

	get rabbitMQListeningQueueName(): string {
		return this.configService.get('RABBITMQ_QUEUE_NAME_LISTEN');
	}
}
