import { Component } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public desiresService: DesiresService, 
                private _router: Router,
                private _alertController: AlertController ) {
  }

  /**
   * To navigate to the add page.
   * The keyword async converts the whole method
   * in a promise.
   */
  async addList() {
    //this._router.navigateByUrl(this._router.url + "/add");
    const alert = await this._alertController.create({
      header: 'New list',
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "List name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel");
          }
        },
        {
          text: "Create",
          handler: ( data ) => {
            console.log(data);
            if (data.title.length == 0) {
              return;
            }
            else {
              //Creating the list
              this.desiresService.createList(data.title );
            }
          }
        }          
      ]
    });

    alert.present();
  }
}
