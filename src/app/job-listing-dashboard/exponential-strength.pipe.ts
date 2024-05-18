import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
  standalone: true
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number): number {
    return Math.random();
  }

}
