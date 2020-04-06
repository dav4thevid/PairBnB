// import { Injectable } from '@angular/core';
import { Booking} from './booking.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
// private _bookings: Booking[] = [
//   {
//     id: 'xyz',
//     placeId: 'p2',
//     placeTitle: 'Manhattan Mantion',
//     guestNumber: 2,
//     userId: 'abc'
//   }
// ];

// get bookings() {
//   return [...this._bookings]
// }
//   constructor() { }
// }


import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) 

export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p2',
            placeTitle: 'Abuja Mansion',
            guestNumber: 2,
            userId: 'abc'
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}

