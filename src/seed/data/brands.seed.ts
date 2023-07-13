import { BrandEntity } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interface/car.interface";
import { v4 as uuid } from "uuid";

export const BrandSeed: BrandEntity[] = [
  {
    id: uuid(),
    name: 'Volvo',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createAt: new Date().getTime(),
  }
];
