// import { Injectable } from '@angular/core';
import { Booking} from './booking.model';



import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) 

export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p2',
            placeTitle: 'Abuja Mansion',
            guestNumber: 2,
            userId: 'abc',
            availableFrom: new Date('2019-01-01'),
            availableTo: new Date('2019-12-01')
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}

