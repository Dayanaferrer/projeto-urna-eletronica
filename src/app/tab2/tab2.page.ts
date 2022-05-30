import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  a = 0
  b = 0
  c = 0

  contagem = [
    { 
      voto1: this.a,
      voto2: this.b,
      voto3: this.c
    }
  ]

  constructor(
    public alert: AlertController,
    public nav: NavController
    ) {}
  
  ngOnInit(): void {}

  abrirPag(x){
    this.nav.navigateForward(x)
  }

}
