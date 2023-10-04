import { Component } from '@angular/core';

@Component({
  selector: 'app-thewellhall',
  templateUrl: './thewellhall.component.html',
  styleUrls: ['./thewellhall.component.scss']
})
export class ThewellhallComponent {
  constructor() {

  }

  ngOnInit(): void {

  }

  verRedes() {
    window.location.href = 'https://mx.linkedin.com/in/jhonatan-aguilera-garcia-5238ba174';
  }
}
