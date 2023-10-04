import { Component } from '@angular/core';


@Component({
  selector: 'app-accommodatios',
  templateUrl: './accommodatios.component.html',
  styleUrls: ['./accommodatios.component.scss']
})
export class AccommodatiosComponent {



  constructor() {

  }

  ngOnInit(): void {

  }

  verHabitacion() {
    window.location.href = 'http://www.ammfec.com/';
  }
}
