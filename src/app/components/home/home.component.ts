import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SliderContentComponent } from '../slider-content/slider-content.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatIconModule, MatDividerModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatSlideToggleModule, MatSidenavModule, CommonModule, RouterModule,SliderContentComponent,MatFormFieldModule,MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
    
  }
  type1:string = 'best';
  type2:string = 'normal';
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 6000,
    autoplay: true,
    //autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }; 
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: true
  };
  mode = new FormControl('over' as MatDrawerMode);
  hasBackdrop = new FormControl(null as null | boolean);
  position = new FormControl('start' as 'start' | 'end');
  panelOpenState = false;
  ngOnInit() {
    
  }
}
