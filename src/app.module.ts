import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesController } from './filmes.controller';

@Module({
  imports: [],
  controllers: [AppController, FilmesController],
  providers: [AppService],
})
export class AppModule {}
