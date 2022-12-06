import { Component, Inject } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
 
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})



export class BadgeComponent { 
  favgender: string=""
  genders: string[] = ['Male', 'Female', 'Not specified'];
  favyear: string=""
  years: string[] = ['year 1', 'year 2', 'year 3','year 4','year 5'];
  favstudy: string=""
  studys: string[] = ['Faculty of Agriculture and Natural Resources', 'Faculty of Information and Communication Technology', 'Faculty of Dentistry','Faculty of Law', 'Faculty of Nursing', 'Faculty of Energy and Environment', 'Faculty of Medicine', 'Faculty of Pharmacy', 'Faculty of Political and Social Sciences', 'Faculty of Business Administration and Communication Arts', 'Faculty of Science', 'Faculty of Science','Medicine', 'Faculty of Engineering', 'Faculty of Liberal Arts', 'Faculty of Architecture and Fine Arts', 'Faculty of Allied Health Sciences', 'College of Education'];
  
  favfirst: string=""
  firsts: string[] = ['0', '1', '2','3'];
  
  favsecond: string=""
  seconds: string[] = ['0', '1', '2','3'];
  favthird: string=""
  thirds: string[] = ['0', '1', '2','3'];
  favfour: string=""
  fours: string[] = ['0', '1', '2','3'];
  favfive: string=""
  fives: string[] = ['0', '1', '2','3'];
  favsix: string=""
  sixs: string[] = ['0', '1', '2','3'];
  favseven: string=""
  sevens: string[] = ['0', '1', '2','3'];
  faveight: string=""
  eights: string[] = ['0', '1', '2','3'];
  favnine: string=""
  nines: string[] = ['0', '1', '2','3'];
  favten: string=""
  tens: string[] = ['Not difficult', 'Somewhat difficult', 'Very difficult','Extremely difficult'];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(dialogOverview, {
      data: {
        animal: 'panda'
      }
    });
  }
}
@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class dialogOverview {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
  


