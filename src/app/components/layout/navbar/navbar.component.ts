import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  translate: TranslateService = inject(TranslateService);

  constructor(){
    this.setLanguageFromStorage();
  }

  translateText(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

    private setLanguageFromStorage() {
      const lang = localStorage.getItem('selectedLanguage');
      if (lang) {
        this.translate.use(lang);
      } else {
        this.translate.setDefaultLang('en');
      }
    }

}
