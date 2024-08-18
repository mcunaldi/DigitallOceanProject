import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrewModel, Currency, Nationality, Title } from '../../models/crew.model';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CertificateModel } from '../../models/certificate.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, TranslateModule],
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})

export class CardPageComponent {

  @ViewChild("addCrewModalCloseBtn") addCrewModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateCrewModalCloseBtn") updateCrewModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("certificateModalCloseBtn") certificateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'nationality', 'title', 'certificates', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome', 'actions'];
  dataSource: CrewModel[] = [];
  certificateDataSource: CrewModel[] = [];

  createCrew: CrewModel = new CrewModel();
  updateCrew: CrewModel = new CrewModel();
  viewCertificateCrew: CrewModel = new CrewModel();

  crewTitles: Title[] = Object.values(Title);
  nationalities: Nationality[] = Object.values(Nationality);
  currencies: Currency[] = Object.values(Currency);

  certificateOptions: CertificateModel[] = [];
  certificateNames: string[] = [];
    
  constructor(
    private http: HttpService) 
  {
    this.getAll();
    this.getCertificates();
  }

  getAll() {
    this.http.get<CrewModel[]>("crews", (res: any) => {
      this.dataSource = res;
    })
  }

  getCertificates() {
    this.http.get<CertificateModel[]>("certificates", (res: CertificateModel[]) => {
      this.certificateOptions = res;
    });
  }

  generateUniqueId(): number {
    let id: number;
    do {
      id = Math.floor(100000 + Math.random() * 900000);
    } while (this.dataSource.some(model => model.id === id));
    return id;
  }

  create(form: NgForm) {
    this.createCrew.id = this.generateUniqueId();
    this.createCrew.totalIncome = this.createCrew.dailyRate * this.createCrew.daysOnBoard;
    this.http.post<string>("crews", this.createCrew, () => {
      this.createCrew = new CrewModel();
      this.addCrewModalCloseBtn?.nativeElement.click();
      this.getAll();
    });
  }

  get(model: CrewModel) {
    this.updateCrew = { ...model };
  }

  updateCrewDetail(form: NgForm) {
    if (this.updateCrew.id) {
      this.http.put<CrewModel>("crews", this.updateCrew.id, this.updateCrew, (res) => {
        console.log(res);
        this.updateCrew = new CrewModel();
        this.updateCrewModalCloseBtn?.nativeElement.click();
        this.getAll();
      }, (err) => {
        console.error('Error updating crew:', err);
      });
    }
  }

  removeById(id: number) {
    this.http.delete<CrewModel>("crews", id, (res) => {
      console.log('Crew member removed successfully', res);
      this.getAll();
    }, (err) => {
      console.error('Error removing crew member:', err);
    });
  }

  getCertificate(model: CrewModel) {
    this.viewCertificateCrew = { ...model };
  }

  viewCertificate(form: NgForm) {
    if (this.viewCertificateCrew.id) {
      this.http.put<CrewModel>("crews", this.viewCertificateCrew.id, this.viewCertificateCrew, (res) => {
        console.log(res);
        this.viewCertificateCrew = new CrewModel();
        this.certificateModalCloseBtn?.nativeElement.click();
        this.getAll();
      }, (err) => {
        console.error('Error updating crew:', err);
      });
    }
  }

}
