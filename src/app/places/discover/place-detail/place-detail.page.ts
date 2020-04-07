import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { CreateBookingsComponent } from './../../../bookings/create-bookings/create-bookings.component';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController, ModalController, ActionSheetController} from '@ionic/angular';


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
    private actionSheetController: ActionSheetController
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
    this.actionSheetController.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModel('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModel('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
    // console.log('clicked');
    // // this.route.navigateByUrl('places/tabs/discover');
    // this.navCtrl.navigateBack('places/tabs/discover');
  }

  openBookingModel(mode: 'select' | 'random') {
    console.log(mode);
    this.modalController.create({component: CreateBookingsComponent, componentProps: {selectedPlace: this.place}}).then(modelEl => {
      modelEl.present();
      return modelEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked!!!');
      }
    })
  }

}
