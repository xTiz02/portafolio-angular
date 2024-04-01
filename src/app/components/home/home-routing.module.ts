import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BestProyectCardComponent } from '../best-proyect-card/best-proyect-card.component';
import { SliderContentComponent } from '../slider-content/slider-content.component';
import { ProyectCardComponent } from '../proyect-card/proyect-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: BestProyectCardComponent},
  { path: 'slider', component: SliderContentComponent},
  { path: 'card2', component: ProyectCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
