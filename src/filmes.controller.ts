import { Controller, Get } from '@nestjs/common';

@Controller('filmes')
export class FilmesController {
  @Get()
  findAll(): string {
    return 'Retornar todos os livros!';
  }
}