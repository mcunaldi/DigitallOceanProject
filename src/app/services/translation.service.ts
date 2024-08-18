import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
    // Observable olarak paylaşılacak BehaviorSubject
    private triggerEventSource = new BehaviorSubject<void>(undefined);
    triggerEvent$ = this.triggerEventSource.asObservable();
  
    // Olayı tetikleme metodu
    triggerEvent() {
      this.triggerEventSource.next();
    }

  translate: TranslateService = inject(TranslateService);

  translateText(lang: string) {
    this.translate.use(lang);
  }
}