import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { AccommodatiosComponent } from './accommodatios/accommodatios.component';
import { ThefamilysuiteComponent } from './thefamilysuite/thefamilysuite.component';
import { InthepressComponent } from './inthepress/inthepress.component';
import { ThewellhallComponent } from './thewellhall/thewellhall.component';


@NgModule({
  declarations: [
    MainComponent,
    AccommodatiosComponent,
    ThefamilysuiteComponent,
    InthepressComponent,
    ThewellhallComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class HomeModule { }
