import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    NotFoundPageComponent
  ]
})
export class PagesModule { }
