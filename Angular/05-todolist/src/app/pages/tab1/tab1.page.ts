import { Component } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public desiresService: DesiresService  ) {
  }

}
