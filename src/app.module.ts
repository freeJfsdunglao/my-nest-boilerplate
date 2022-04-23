import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationsModule } from './configurations/configurations.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [ConfigurationsModule, RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}
