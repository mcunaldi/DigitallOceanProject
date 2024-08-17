import { Component } from '@angular/core';
import { CrewModel } from '../../models/crew.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})


export class CardPageComponent {
  constructor(
    private http: HttpClient
  ){
    this.getAll();
  }

  models: CrewModel[] = [];

  getAll() {
    this.http.get<CrewModel[]>("http://localhost:3000/crews")
      .subscribe({
        next: (res) => {
          this.models = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
  }

}
