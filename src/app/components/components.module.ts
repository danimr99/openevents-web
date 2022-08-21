import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { EventsShowcaseComponent } from './events-showcase/events-showcase.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SearchBarComponent,
    UserAvatarComponent,
    EventsShowcaseComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
    UserAvatarComponent,
    EventsShowcaseComponent,
    LoginFormComponent
  ]
})
export class ComponentsModule { }
