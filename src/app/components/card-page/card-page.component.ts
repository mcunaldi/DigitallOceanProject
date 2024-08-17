import { Component } from '@angular/core';
import { CrewModel } from '../../models/crew.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})


export class CardPageComponent {
  constructor(
    private http: HttpClient
  ){
    this.getAll();
  }

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'nationality', 'title','certificates','daysOnBoard','dailyRate', 'currency', 'totalIncome'];
  models: CrewModel[] = [];
  dataSource: CrewModel[] = [];

  getAll() {
    this.http.get<CrewModel[]>("http://localhost:3000/crews")
      .subscribe({
        next: (res) => {
          this.models = res;
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
  }

  addCrew(){
    
  }

}
