import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  variable1: any;
  constructor() {}

  log(message: string) {
    console.log('message ', message);
  }
}
