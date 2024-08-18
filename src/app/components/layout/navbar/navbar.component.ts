import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  translate: TranslateService = inject(TranslateService);

  constructor(
    private translationService: TranslationService
  ){}

  translateText(lang: string) {
    this.translate.use(lang);

    this.translationService.triggerEvent();
  }

}
