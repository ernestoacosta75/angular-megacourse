import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DesiresService {
  lists: List [] = [];
  
  constructor() { 
    const list1 = new List("Collecting infinity stones");
    const list2 = new List("Heroes to defeat");

    this.lists.push(list1, list2);
    console.log(this.lists);
  }

  /**
   * To create a new list.
   * @param title List title
   */
  createList( title: string) {
    const newList = new List(title);
    this.lists.push(newList);
  }
}
