import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from "./app.material.module";
import {routing} from "./app.routing";
import {HomeComponentComponent} from "./home-component/home-component.component";
import {ProfileComponentComponent} from "./profile-component/profile-component.component";
import {TextComponentComponent} from "./atoms/text-component/text-component.component";
import {EducationComponentComponent} from "./home-component/education-component/education-component.component";
import {AboutComponentComponent} from "./about-component/about-component.component";
import {ExperienceComponentComponent} from "./home-component/experience-component/experience-component.component";
import {LogocardComponentComponent} from "./home-component/logocard-component/logocard-component.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    ProfileComponentComponent,
    TextComponentComponent,
    EducationComponentComponent,
    AboutComponentComponent,
    ExperienceComponentComponent,
    LogocardComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
