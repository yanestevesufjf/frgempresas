import { Component } from '@angular/core';
import { CoreService } from '../services/core.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  optionsRecomendados: OwlOptions = {
    // center: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 210,//30//270 
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    },
  }

  optionsTop: OwlOptions = {
    // center: true,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    margin: 120,//30//270 
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    },
  }

  constructor(public core: CoreService) {}

 
}
