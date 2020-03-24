import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place[] = [
  new Place(
    '1', 
    'Abuja Hotel', 
    'A nice place to chill', 
    'https://guardian.ng/wp-content/uploads/2017/02/NICON-Luxury-Abuja.jpg', 
    55
    ),
    new Place(
      '2', 
      'Lagos Hotel', 
      'very nice place', 
      'ubuowboeuw', 
      123.45
      ),
      new Place(
        '3', 
        'Port-Harcourt Hotel', 
        'very very nice', 
        'ubuowboeuw', 
        200.45
        )
];

get places() {
  return [...this._places];
}
  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
