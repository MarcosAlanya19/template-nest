import { Car } from "src/cars/interface/car.interface";
import { v4 as uuid } from "uuid";

export const CarsSeed: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic'
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokke'
  }
];
