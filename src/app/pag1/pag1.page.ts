import { Component } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page extends Tab2Page {

  async voto(){
    const alert = await this.alert.create({
      header: 'Aviso!',
      message: 'Voto computado com sucesso',
      buttons: ['OK']
    });

    this.a = this.a + 1;
    console.log(this.a)

    await alert.present();
  }

}
