import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Certificate, CertificateModel } from '../../models/certificate.model';


@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {


  @ViewChild("addCertificateModalCloseBtn") addCertificateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateCertificateModalCloseBtn") updateCertificateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  displayedColumns: string[] = ['id', 'certificateName', 'description'];
  dataSource: CertificateModel[] = [];

  createCertificate: CertificateModel = new CertificateModel();
  updateCertificate: CertificateModel = new CertificateModel();

  CertificateTitles: Certificate[] = Object.values(Certificate);

  constructor(
    private http: HttpService) {
    this.getAll();
  }

  getAll() {
    this.http.get<CertificateModel[]>("certificates", (res: any) => {
      this.dataSource = res;
    })
  }
  generateUniqueId(): number {
    let id: number;
    do {
      id = Math.floor(100000 + Math.random() * 90000000);
    } while (this.dataSource.some(model => model.id === id));
    return id;
  }

  create(form: NgForm) {
    this.createCertificate.id = this.generateUniqueId();
    this.http.post<string>("certificates", this.createCertificate, () => {
      this.createCertificate = new CertificateModel();
      this.addCertificateModalCloseBtn?.nativeElement.click();
      this.getAll();
    });
  }

  get(model: CertificateModel) {
    this.updateCertificate = { ...model };
  }

  updateCertificateDetail(form: NgForm) {
    if (this.updateCertificate.id) {
      this.http.put<CertificateModel>("certificates", this.updateCertificate.id, this.updateCertificate, (res) => {
        console.log(res);
        this.updateCertificate = new CertificateModel();
        this.updateCertificateModalCloseBtn?.nativeElement.click();
        this.getAll();
      }, (err) => {
        console.error('Error updating Certificate:', err);
      });
    }
  }

  removeById(id: number) {
    this.http.delete<CertificateModel>("certificates", id, (res) => {
      console.log('Certificate member removed successfully', res);
      this.getAll();
    }, (err) => {
      console.error('Error removing Certificate member:', err);
    });
  }

}
