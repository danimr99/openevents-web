import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AuthenticationPageComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    AuthenticationPageComponent,
    HomePageComponent,
    NotFoundPageComponent
  ]
})
export class PagesModule { }
