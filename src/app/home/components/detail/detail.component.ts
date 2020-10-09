import { Component, OnInit } from '@angular/core';
import { LaunchesService } from './../../../core/services/launches/launches.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  launche: any;

  constructor(
    private launchesService: LaunchesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.launchesService.getLaunches(this.id)
        .subscribe(launche => {
          this.launche = launche;
          console.log(launche);
        });
    });
  }

}
