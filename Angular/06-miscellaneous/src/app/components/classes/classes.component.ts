import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alert:string = "alert-danger";

  properties:Object = {
    info: false
  }

  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  runProcess() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
