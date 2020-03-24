import { PlacesService } from './../places.service';
import { Place } from './../place.model';
import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  constructor(private placesService: PlacesService, private menuController: MenuController) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  // onMenuOpen() {
  //   this.menuController.toggle();
  // }

}
