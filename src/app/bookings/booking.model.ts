export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public placeTitle: string,
        public userId: string, 
        public guestNumber: number,
        public availableFrom: Date,
        public availableTo: Date,

     ) {}
    }