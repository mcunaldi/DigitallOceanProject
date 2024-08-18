import { CertificateModel } from "./certificate.model";

export class CrewModel {
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  nationality: Nationality = Nationality.Turkish;
  title: Title = Title.Officer;
  certificates: CertificateModel[] = [];
  daysOnBoard: number = 0;
  dailyRate: number = 0;
  currency: Currency = Currency.USD;
  totalIncome: number = 0;
}

export enum Title {
  Captain = 'Captain',
  Engineer = 'Engineer',
  Cooker = 'Cooker',
  Mechanic = 'Mechanic',
  Officer = 'Officer'
}

export enum Currency {
  USD = "USD",
  EURO = "EURO"
}

export enum Nationality {
  Turkish = "Turkish",
  American = "American",
  British = "British",
  German = "German",
  Portuguese = "Portuguese"
}

