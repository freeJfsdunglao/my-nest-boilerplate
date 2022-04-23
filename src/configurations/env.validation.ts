import { plainToClass } from 'class-transformer';
import { 
	IsBooleanString,
	IsEnum, 
	IsInt, 
	IsLowercase,
	IsNotEmpty,
	IsOptional,
	IsString,
	validateSync, 
	ValidateIf,
	ValidatorOptions,
} from 'class-validator';

const IF_RABBITMQ_WILL_BE_USED = o => o.USE_RABBITMQ === 'true';

enum EnvironmentType {
	Development = 'development',
	Production = 'production',
	Test = 'test',
	Local = 'local',
}

class EnvironmentVariables {
	@IsNotEmpty()
	@IsEnum(EnvironmentType)
	NODE_ENV: EnvironmentType;

	@IsInt()
	PORT: number;

	@IsNotEmpty()
	@IsBooleanString()
	@IsLowercase()
	USE_RABBITMQ: string;

	@ValidateIf(IF_RABBITMQ_WILL_BE_USED)
	@IsNotEmpty()
	@IsString()
	RABBITMQ_URL: string;

	@ValidateIf(IF_RABBITMQ_WILL_BE_USED)
	@IsNotEmpty()
	@IsString()
	RABBITMQ_LISTEN_TO_QUEUE_NAME: string;
}

/**
 * https://docs.nestjs.com/techniques/validation
 */
export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToClass(
		EnvironmentVariables,
		config,
		{ 
			enableImplicitConversion: true 
		},
	);

	const validationOptions: ValidatorOptions = {
		skipMissingProperties: false,
		enableDebugMessages: true,
		// skipNullProperties: false,
	};

	const errors = validateSync(validatedConfig, validationOptions);

	if (errors.length > 0) {
		throw new Error(errors.toString());
	}

	return validatedConfig;
}