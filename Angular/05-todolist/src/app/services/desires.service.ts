import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DesiresService {
  lists: List [] = [];
  
  constructor() { 
    console.log("Service initalized!!")
  }
}
