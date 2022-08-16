import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SearchBarComponent,
    UserAvatarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
    UserAvatarComponent
  ]
})
export class ComponentsModule { }
