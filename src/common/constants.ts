import { join } from 'path';

export const BASE_DIR = join(__dirname, '../');

export const ENV_FILE_PATHS_FROM_MAIN_FILE = [
	join(BASE_DIR, './.env'),
	join(BASE_DIR, './.env.dev'),
	join(BASE_DIR, './.env.local'),
];

export enum MicroserviceList {
	DEFAULT = 'DEFAULT',
}

export enum MicroserviceQueueList {}