import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor() { }

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

}
