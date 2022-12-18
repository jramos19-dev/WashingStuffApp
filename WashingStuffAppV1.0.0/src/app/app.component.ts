import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WashingStuffAppV1.0.0';
}
