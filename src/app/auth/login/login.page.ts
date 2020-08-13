import { RequestService } from './../../services/request.service';
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
    private modalController: ModalController,
    private requestService: RequestService
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
    this.requestService.login(form.value.email, form.value.password).subscribe(
      data => {
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navController.navigateRoot('/recipes');
      }
    );
  }

}
