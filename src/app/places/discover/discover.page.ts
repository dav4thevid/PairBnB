import { PlacesService } from './../places.service';
import { Place } from './../place.model';
import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  constructor(private placesService: PlacesService, private menuController: MenuController) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onMenuOpen() {
    this.menuController.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail)
  }

}
