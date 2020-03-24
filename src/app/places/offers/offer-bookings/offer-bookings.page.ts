import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private navCtr: NavController, 
    private placeService: PlacesService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtr.navigateBack('/place/tabs/offers');
        // this.router.navigateByUrl('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

}
