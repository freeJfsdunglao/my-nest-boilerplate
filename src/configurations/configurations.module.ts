import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ConfigurationsService } from './configurations.service';

import { ENV_FILE_PATHS_FROM_MAIN_FILE } from '../common/constants';
import { validate } from './env.validation';

/**
 * DOCUMENTATION: https://docs.nestjs.com/techniques/configuration
 */
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ENV_FILE_PATHS_FROM_MAIN_FILE,
			isGlobal: true,
			expandVariables: true,
			ignoreEnvFile: false,
			validate
		}),
	],
	providers: [ConfigurationsService],
	exports: [ConfigurationsService],
})
export class ConfigurationsModule {}
