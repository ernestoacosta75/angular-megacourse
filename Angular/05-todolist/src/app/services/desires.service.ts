import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DesiresService {
  lists: List [] = [];
  
  constructor(private _storage: Storage) { 
    this.loadFromStorage();
  }

  /**
   * To create a new list.
   * @param title List title
   */
  createList( title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveInStorage()
    
    return newList.id;
  }

  /**
   * Returns the list with that id.
   * @param listId  List ID
   */
  getList( listId: string | number ) {
    listId = Number(listId);
    return this.lists.find( theList => theList.id === listId );
  }

  /**
   * To persist in the local storage
   * any info that must be saved into
   * the device.
   */
  saveInStorage() {
    //this._storage.set('data', this.lists);
    localStorage.setItem('data', JSON.stringify(this.lists) );
  }

  /**
   * Load the information persisted on
   * the local storage.
   */
  loadFromStorage() {
    if ( localStorage.getItem('data') ) {
      this.lists = JSON.parse( localStorage.getItem('data') );
    } else {
      this.lists = [];
    }
    /**
      this._storage.get('data').then((val) => {
        if (val == null) {
          this.lists = [];
        }
        else {
          this.lists = val;
        }        
      }); */
  }
}
