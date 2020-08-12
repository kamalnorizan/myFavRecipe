import { RegisterPage } from './../register/register.page';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navController: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismissLogin() {
    this.modalController.dismiss();
  }

  async registerModel() {
    this.dismissLogin();
    const registerModel = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModel.present();
  }

  login(form: NgForm) {
    this.dismissLogin();
    this.navController.navigateRoot('/recipes');
  }

}
