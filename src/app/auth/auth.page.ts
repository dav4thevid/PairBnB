import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
 

  logIn() {
    this.isLoading = true;
    this.authService.logIn();
    this.loadingCtrl.create({keyboardClose: true, message: "Logging in.....", })
    .then(loadingEl => {
    loadingEl.present();
    setTimeout(() => {
      this.router.navigateByUrl('/places/tabs/discover');
      loadingEl.dismiss();
      this.isLoading = false;
      }, 1500);
    });
    }
  }

