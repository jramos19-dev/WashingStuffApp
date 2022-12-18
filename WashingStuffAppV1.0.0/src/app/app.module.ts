import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  {path: 'AboutUs',component:AboutUsComponentComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavBarComponentComponent,
    SideBarComponent,
    LayoutComponentComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
