import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: ` <div class="nav">
    <div class="container">
      <img
        src="https://sdacademy.al/sda-assets/themes/sda/img/sda-logo.svg"
        width="300px"
        alt=""
        style="cursor: pointer;"
      />
    </div>
  </div>`,
  styles: ['.nav { background-color: var(--surface-ground); padding: 10px;}'],
})
export class NavbarComponent {}
