import { Component, ElementRef, ViewChild } from '@angular/core';
import { Certificate, CrewModel, Currency, Nationality, Title } from '../../models/crew.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})


export class CardPageComponent {

  @ViewChild("addCrewModalCloseBtn") addCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateCrewModalCloseBtn") updateCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  constructor(
    private http: HttpClient
  ){
    this.getAll();
  }

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'nationality', 'title','certificates','daysOnBoard','dailyRate', 'currency', 'totalIncome'];
  models: CrewModel[] = [];
  dataSource: CrewModel[] = [];
  createCrew: CrewModel = new CrewModel();

  crewTitles: Title[] = Object.values(Title);
  nationalities: Nationality[] = Object.values(Nationality);
  currencies: Currency[] = Object.values(Currency);
  selectedCertificates = Object.values(Certificate);

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

  create(form: NgForm) {
    if(!form.valid) return;
    
    this.http.post("http://localhost:3000/crews", this.createCrew)
      .subscribe({
        next: (res: any) => {
          this.createCrew = new CrewModel();
          this.addCloseBtn?.nativeElement.click();

          this.getAll();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }
}
