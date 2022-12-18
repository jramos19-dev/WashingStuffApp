import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavBarComponentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
