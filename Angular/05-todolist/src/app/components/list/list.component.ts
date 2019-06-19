import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { DesiresService } from 'src/app/services/desires.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() finished = true;
  @ViewChild( 'ionList' ) list: IonList;

  constructor(public desiresServices: DesiresService,
              private _router: Router,
              private _alertController: AlertController) { }

  ngOnInit() {}

  /**
   * Redirecting to the add page.
   * @param list Selected list
   */
  getSelectedList(list: List) {
    this._router.navigateByUrl(this._router.url + `/add/${ list.id }`);
  }

  /**
   * Delete the selected list.
   * @param list 
   */
  deleteList(list: List) {
    this.desiresServices.deleteList(list);
  }

  /**
   * To edit a title list.
   * The keyword async converts the whole method
   * in a promise. 
   * @param list 
   */
  async editListTitle(list: List) {
    
    const alert = await this._alertController.create({
      header: 'Edit title list',
      inputs: [
        {
          name: "title",
          type: "text",
          value: `${list.title}`,
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
          text: "Update",
          handler: ( data ) => {
            if (data.title.length == 0) {
              return;
            }
            else {
              //Updating the list title
              this.desiresServices.updateListTitle(list.title, data.title);
              this.list.closeSlidingItems();
            }
          }
        }          
      ]
    });

    alert.present();
  }    

}  

