import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@app/components/user/user.component';
import { EditUserComponent } from '@app/components/user/edit-user.component';
import { DetailsUserComponent } from '@app/components/user/details-user.component';
import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from '@app/components/user/new-user.component';

@NgModule({
  declarations: [UserComponent, NewUserComponent, EditUserComponent, DetailsUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
