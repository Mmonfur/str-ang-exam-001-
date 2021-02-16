import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "**",
    component: HomeComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
