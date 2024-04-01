import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BestProyectCardComponent } from '../best-proyect-card/best-proyect-card.component';
import { HttpClient } from '@angular/common/http';
import { ProyectCardComponent } from '../proyect-card/proyect-card.component';
@Component({
  selector: 'app-slider-content',
  standalone: true,
  imports: [ CarouselModule, CommonModule, BestProyectCardComponent, ProyectCardComponent],
  templateUrl: './slider-content.component.html',
  styleUrl: './slider-content.component.scss'
})
export class SliderContentComponent {
  @Input() optionsCarousel!:OwlOptions;
  @Input() type!:String;

  ngOnInit(): void {
    if(!this.optionsCarousel){
      this.loadDefaultOptions();
    }
  }

  loadDefaultOptions(){
    this.optionsCarousel = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      autoplay: false,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        // 400: {
        //   items: 2
        // },
        // 740: {
        //   items: 3
        // },
        // 940: {
        //   items: 4
        // }
      },
      nav: true
    }
  }
}
