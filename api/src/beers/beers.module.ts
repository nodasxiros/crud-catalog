import { Module } from '@nestjs/common';
import { BeersService } from './beers.service';
import { BeersController } from './beers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Beer } from './entities/beer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Beer])],
  controllers: [BeersController],
  providers: [BeersService]
})
export class BeersModule {}
