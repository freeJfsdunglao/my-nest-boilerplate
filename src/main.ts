import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';
import { ConfigurationsService } from './configurations/configurations.service';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const configService = app.get(ConfigurationsService);

  const PORT = configService.portNumber;

  await app.listen(PORT, () => {
    console.log(`Nest application is now listening to :${PORT}`);
  });
}
bootstrap();
