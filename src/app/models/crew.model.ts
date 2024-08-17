export class CrewModel{
    firstName: string = "";
    lastName: string = "";
    nationality: Nationality = Nationality.Turkish;
    title: Title = Title.Officer;
    daysOnBoard: number = 0;
    dailyRate: number = 0;
    currency: Currency = Currency.USD;
    totalIncome: number = 0;
}

export enum Title{
    Captain = 0,
    Engineer = 1,
    Cooker = 2,
    Mechanicer = 3,
    Officer = 4
  }

  export enum Currency{
    USD = 0,
    EURO = 1
  }

  export enum Nationality{
    Turkish = 0,
    American = 1,
    British = 2,
    German = 3,
    Portuguese = 4
  }