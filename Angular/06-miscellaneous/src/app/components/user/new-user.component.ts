import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.parent.params.subscribe( params => {
      console.log("CHILD new user route");
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
