import { ItemList } from './../../models/item-list.model';
import { DesiresService } from './../../services/desires.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private _desiresService: DesiresService,
                private _activatedRoute: ActivatedRoute) {
  
    const listId = this._activatedRoute.snapshot.paramMap.get('listId');
    this.list = this._desiresService.getList(listId);
    console.log(this.list);
  }

  ngOnInit() {
  }

  addItem() {
    if( this.itemName.length === 0 ) {
      return;
    }

    const newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';
    this._desiresService.saveInStorage();
  }

  changeStatus(item: ItemList){
    //This filter returns an array with all items of the list that are pending
    const pending = this.list.items.filter( itemList => !itemList.complete).length;

    console.log({pending});

    if(pending === 0) {
      this.list.terminatedIn = new Date();
      this.list.completed = true;
    }
    else {
      this.list.terminatedIn = null;
      this.list.completed = false;
    }
    
    this._desiresService.saveInStorage();
 }
}
