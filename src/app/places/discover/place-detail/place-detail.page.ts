import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    console.log('clicked');
    // this.route.navigateByUrl('places/tabs/discover');
    this.navCtrl.navigateBack('places/tabs/discover');
  }

}
