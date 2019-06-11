import { Component } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public desiresService: DesiresService, 
                private _router: Router  ) {
  }

  /**
   * To navigate to the add page.
   */
  addList() {
    this._router.navigateByUrl(this._router.url + "/add");
  }
}
