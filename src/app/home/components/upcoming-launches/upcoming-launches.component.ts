import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Launches } from './../../../core/models/launches.model';
import { LaunchesService } from './../../../core/services/launches/launches.service';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss']
})
export class UpcomingLaunchesComponent implements OnInit {

  launches = [];

  displayedColumns: string[] = ['name', 'static_fire_date_utc', 'date_utc', 'date_local', 'action'];
  dataSource = new MatTableDataSource(this.launches);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private launchesService: LaunchesService
  ) { }

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches() {
    this.launchesService.getAllUpcomingLaunches()
    .subscribe(launches => {
      this.launches = launches;
      this.dataSource.data = launches;
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
