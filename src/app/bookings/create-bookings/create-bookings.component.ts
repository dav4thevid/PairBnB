import { ModalController } from '@ionic/angular';
import { Place } from './../../places/place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {

  @Input() selectedPlace: Place;
  constructor(private modalCtrl: ModalController ) {}

  ngOnInit() {}

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message'}, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
