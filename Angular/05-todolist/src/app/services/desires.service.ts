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
  }

  /**
   * To persist in the local storage
   * any info that must be saved into
   * the device.
   */
  saveInStorage() {
    this._storage.set('data', this.lists);
  }

  /**
   * Load the information persisted on
   * the local storage.
   */
  loadFromStorage() {
    if( this._storage.get('data')) {
      this._storage.get('data').then((val) => {
        this.lists = val;
      });
    }
    else {
      this.lists = [];
    }    
  }
}
