import { LoginPage } from './../login/login.page';
import { RequestService } from './../../services/request.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private requestService: RequestService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  dismissRegister() {
    this.modalController.dismiss();
  }

  register(form) {
    this.requestService.register(form.value.fname, form.value.lname, form.value.email, form.value.password).subscribe(
      data => {
        this.requestService.login(form.value.email, form.value.password).subscribe(
          thedata => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/recipes');
          }
        );
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }

  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }
}
