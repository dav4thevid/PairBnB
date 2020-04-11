import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;
  isLoading = false;
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private loadingCtrl: LoadingController,
    ) { }

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

    onSubmit(form: NgForm) {
     if (!form.valid){
       return
     }
     const email = form.value.email;
     const password = form.value.password;
     console.log(email, password);

     if (this.isLogin) {
      //send a request to login servers
     } else {
       //send a request to signup servers
     }
    }

    onSwitch() {
      this.isLogin = !this.isLogin;
      console.log("clicked");
    }
  }

