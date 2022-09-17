import { ViewUserComponent } from './manage-user-profile/view-user/view-user.component';
import { UpdateUserComponent } from './manage-user-profile/update-user/update-user.component';
import { CreateUserComponent } from './manage-user-profile/create-user/create-user.component';
import { ManageUserProfileComponent } from './manage-user-profile/manage-user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'manage-user-profile',
    component: ManageUserProfileComponent,
    children:
      [
        {
          path: 'create-user',
          component: CreateUserComponent,
        },
        {
          path: 'update-user',
          component: UpdateUserComponent
        },
        {
          path: 'view-user',
          component: ViewUserComponent
        },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
