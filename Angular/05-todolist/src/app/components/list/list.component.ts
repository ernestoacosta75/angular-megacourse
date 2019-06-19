import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { DesiresService } from 'src/app/services/desires.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(public desiresServices: DesiresService,
              private _router: Router) { }

  ngOnInit() {}

  /**
   * Redirecting to the add page.
   * @param list Selected list
   */
  getSelectedList(list: List) {
    this._router.navigateByUrl(this._router.url + `/add/${ list.id }`);
  }
}  

