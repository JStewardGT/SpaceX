import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

import { SharedModule } from './../shared/shared.module';

import { MaterialModule } from './../material/material.module';
import { PastLaunchesComponent } from './components/past-launches/past-launches.component';
import { UpcomingLaunchesComponent } from './components/upcoming-launches/upcoming-launches.component';

@NgModule({
  declarations: [HomeComponent, DetailComponent, PastLaunchesComponent, UpcomingLaunchesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
