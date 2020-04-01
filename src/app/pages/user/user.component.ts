import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [NgbInputDatepickerConfig]
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    config: NgbInputDatepickerConfig, calendar: NgbCalendar
  ) { 
     // customize default values of datepickers used by this component tree
    //  config.minDate = {year: 1900, month: 1, day: 1};
    //  config.maxDate = {year: 2099, month: 12, day: 31};
 
    //  // days that don't belong to current month are not visible
    //  config.outsideDays = 'hidden';
 
    //  // weekends are disabled
    //  config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
 
    //  // setting datepicker popup to close only on click outside
    //  config.autoClose = 'outside';
 
    //  // setting datepicker popup to open above the input
    //  config.placement = ['top-left', 'top-right'];
   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      dob: [''],
      address: this.fb.group({
        address1: [''],
        city: ['']
      })
    });
    
  }

  userformSubmit() {
    console.log(this.userForm);
  }

}
