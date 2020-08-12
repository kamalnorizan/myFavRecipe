import { RegisterPage } from './../auth/register/register.page';
import { LoginPage } from './../auth/login/login.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('Landing: ngOnInit');
  }

  ionViewWillEnter(){
    console.log('Landing: ionViewWillEnter');
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

  ngOnDestroy() {
    console.log('Landing: OnDestroy');
  }

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

}
