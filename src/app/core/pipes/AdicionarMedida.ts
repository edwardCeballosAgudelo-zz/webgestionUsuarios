import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'adicionarMedida' })
export class AdicionarMedida implements PipeTransform {
  transform(value: string, args: any[] = []) {
    return `${value} Kg`;
  }
}
