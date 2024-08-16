import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from "./main-sidebar/main-sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AppComponent, RouterOutlet, MainSidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
