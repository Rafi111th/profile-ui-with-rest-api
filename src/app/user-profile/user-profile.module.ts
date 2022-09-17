import { IonicModule } from '@ionic/angular';
import { CreateUserComponent } from './manage-user-profile/create-user/create-user.component';
import { ViewUserComponent } from './manage-user-profile/view-user/view-user.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UpdateUserComponent } from './manage-user-profile/update-user/update-user.component';


@NgModule({
  declarations: [
    ManageUserProfileComponent,
    CreateUserComponent,
    ViewUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    IonicModule,
  ]
})
export class UserProfileModule { }
