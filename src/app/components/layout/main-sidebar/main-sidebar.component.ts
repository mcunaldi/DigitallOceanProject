import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Menus } from '../../../menu';
import { MenuPipe } from '../../../pipes/menu.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, MenuPipe, TranslateModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {
  search: string = "";
  menus = Menus;
}
