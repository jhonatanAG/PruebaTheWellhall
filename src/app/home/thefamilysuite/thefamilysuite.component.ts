import { Component } from '@angular/core';


@Component({
  selector: 'app-thefamilysuite',
  templateUrl: './thefamilysuite.component.html',
  styleUrls: ['./thefamilysuite.component.scss']
})
export class ThefamilysuiteComponent {
  

  constructor() {

  }

  ngOnInit(): void {

  }

  verPromos() {
    window.location.href = 'https://www.amazon.com.mx/gp/goldbox';
  }
}
