import { RequestService } from './../services/request.service';
import { RegisterPage } from './../auth/register/register.page';
import { LoginPage } from './../auth/login/login.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  test;
  constructor(
    private modalController: ModalController,
    private requestService: RequestService,
    private navController: NavController
  ) { }

  ngOnInit() {
    console.log('Landing: ngOnInit');
  }

  ionViewWillEnter() {
    this.requestService.getToken().then(
      () => {
        if (this.requestService.isLoggedIn) {
          this.navController.navigateRoot('/recipes');
        }
    });
  }

  ionViewDidEnter(){
    console.log('Landing: ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('Landing: ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('Landing: ionViewDidLeave');
  }

  // ngOnDestroy() {
  //   console.log('Landing: OnDestroy');
  // }

  async login(){
    const loginModal = await this.modalController.create({
      component: LoginPage
    });

    return await loginModal.present();
  }

  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });

    return await registerModal.present();
  }

  // async register() {
  //   const toast = await this.toastController.create({
  //     message: 'Ini register button.',
  //     duration: 2000
  //   });
  //   toast.present();
  // }


}
