import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BrandSeed } from './data/brands.seed';
import { CarsSeed } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(private readonly carsService: CarsService, private readonly brandService: BrandsService) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CarsSeed);
    this.brandService.fillBrandsWithSeedData(BrandSeed);

    return 'Seed executed successfully'
  }
}
