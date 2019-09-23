import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { RateService } from '../../rate.service';
import { Rate } from '../../rate.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  rate: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private rateService: RateService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      rating:'',
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.rateService.getempById(this.id).subscribe(res => {
        this.rate = res;
        this.updateForm.get('title').setValue(this.rate.title);
        this.updateForm.get('description').setValue(this.rate.description);
        this.updateForm.get('rating').setValue(this.rate.rating);
      });
    });
  }

  updateemp(title, description, rating) {
    this.rateService.updateemp(this.id, title, description, rating).subscribe(() => {
      this.snackBar.open('Rate updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
