import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../models/crew.model';

@Pipe({
  name: 'currencySymbol',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: Currency): string {
    if (isNaN(value)) return '';

    // Sayıyı virgüllerle ayırma
    const formattedValue = new Intl.NumberFormat('en-US').format(value);

    let symbol = '';
    switch (currency) {
      case Currency.USD:
        symbol = '$';
        break;
      case Currency.EUR:
        symbol = '€';
        break;
      default:
        symbol = '';
        break;
    }

    return `${symbol}${formattedValue}`;
  }
}
