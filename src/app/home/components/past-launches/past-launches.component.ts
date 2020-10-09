import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { LaunchesService } from './../../../core/services/launches/launches.service';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.component.html',
  styleUrls: ['./past-launches.component.scss']
})
export class PastLaunchesComponent implements OnInit {

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
    this.launchesService.getAllPastLaunches()
    .subscribe(launches => {
      this.launches = launches;
      this.dataSource.data = this.launches;
      console.log(this.launches);
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
