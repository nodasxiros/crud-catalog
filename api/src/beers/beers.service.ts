import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Beer } from './entities/beer.entity';

@Injectable()
export class BeersService {
  constructor(
    @InjectModel(Beer)
    private beerModel: typeof Beer
  ) {}
  
  create(createBeerDto: CreateBeerDto): Promise<Beer> {
    return this.beerModel.create(createBeerDto)
  }

  findAll(): Promise<Beer[]>  {
    return this.beerModel.findAll();
  }

  findOne(id: number): Promise<Beer> {
    return this.beerModel.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateBeerDto: UpdateBeerDto): Promise<number[]> {
    return this.beerModel.update(updateBeerDto, {
      where: {
        id
      }
    });
  }

  remove(id: number): Promise<number> {
    return this.beerModel.destroy({
      where: {
        id
      }
    });
  }
}
