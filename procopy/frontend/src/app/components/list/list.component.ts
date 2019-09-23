import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';


import { Rate } from '../../rate.model';
import { RateService } from '../../rate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rate: Rate[];
  displayedColumns = ['title', 'description', 'rating'];

  constructor(private rateService: RateService,  private router: Router) { }

  ngOnInit() {
    this.fetchRate();
  }

  fetchRate() {
    this.rateService
      .getemp()
      .subscribe((data: Rate[]) => {
        this.rate = data;
        console.log('Data requested ...');
        console.log(this.rate);
      });
  }

  editemp(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteemp(id) {
    this.rateService.deleteemp(id).subscribe(() => {
      this.fetchRate();
    });
  }

}
