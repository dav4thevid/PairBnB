import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { CreateBookingsComponent } from './../../../bookings/create-bookings/create-bookings.component';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController, ModalController} from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private placesService: PlacesService, 
    private navCtrl: NavController, 
    private modalController: ModalController,  
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }


  onBookPlace() {
    // console.log('clicked');
    // // this.route.navigateByUrl('places/tabs/discover');
    // this.navCtrl.navigateBack('places/tabs/discover');
    this.modalController.create({component: CreateBookingsComponent, componentProps: {selectedPlace: this.place}}).then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked!!!');
      }
    });
  }

}
