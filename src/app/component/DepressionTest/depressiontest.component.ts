import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { DepressionTestService } from "./depressiontest.service";
import { DepressionTestReq } from "./depressiontest.type";
import { NavigationExtras, Router } from "@angular/router";

import { FeedbackService } from "../feedback/feedback.service";


@Component({
  templateUrl: "depressiontest.component.html",
  styleUrls: ["depressiontest.component.css"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class DepressionTestComponent implements OnInit {
  favfirst: string = "";
  firsts: string[] = ["0", "1", "2", "3"];
  favsecond: string = "";
  seconds: string[] = ["0", "1", "2", "3"];
  favthird: string = "";
  thirds: string[] = ["0", "1", "2", "3"];
  favfour: string = "";
  fours: string[] = ["0", "1", "2", "3"];
  favfive: string = "";
  fives: string[] = ["0", "1", "2", "3"];
  favsix: string = "";
  sixs: string[] = ["0", "1", "2", "3"];
  favseven: string = "";
  sevens: string[] = ["0", "1", "2", "3"];
  faveight: string = "";
  eights: string[] = ["0", "1", "2", "3"];
  favnine: string = "";
  nines: string[] = ["0", "1", "2", "3"];
  favten: string = "";
  tens: string[] = [
    "Not difficult",
    "Somewhat difficult",
    "Very difficult",
    "Extremely difficult",
  ];

 
  score: number = 0;
  feedback: string = "";
  constructor(
    public dialog: MatDialog,
    private service: DepressionTestService,
    private feedbackService: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {}



  getResult() {
    this.score = 0;

    this.score += Number(this.favfirst);

    this.score += Number(this.favsecond);

    this.score += Number(this.favthird);

    this.score += Number(this.favfour);

    this.score += Number(this.favfive);

    this.score += Number(this.favsix);

    this.score += Number(this.favseven);

    this.score += Number(this.faveight);

    this.score += Number(this.favnine);

    if (this.favten == "Not difficult") {
      this.score += 0;
    }
    if (this.favten == "Somewhat difficult") {
      this.score += 1;
    }
    if (this.favten == "Very difficult") {
      this.score += 2;
    }
    if (this.favten == "Extremely difficult") {
      this.score += 3;
    }
    console.log(this.score);
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  Feedback = new FormGroup({
    feedback: new FormControl(""),
  });
  openDialog() {
    console.log("this.score ==> before", this.score);

    this.dialog
      .open(dialogOverview, {
        data: {
          score: this.score,
          feedback: this.Feedback.value.feedback ?? "",
        },
      })
      .afterClosed()
      .subscribe((item) => {
        if (item) {
          this.getResult();
        }
        console.log("this.score ==> save", this.score);

        console.log(item);
        let confirmed: DepressionTestReq = {
          userId: localStorage.getItem("userId") ?? "",
          scoreResult: this.score,
          TestDate: new Date(),
          feedback: this.Feedback.value.feedback ?? "",
        };

        this.service.postAddDepressionTest(confirmed).subscribe((response) => {
          console.log(response);
          //console.log(response.isSuccess);
          console.log("old page", this.score);
          let navigationExtras: NavigationExtras = {
            queryParams: {
              scoreResult: response.score,
              level: response.level,
            },
          };

          this.router.navigate(["/scoreResult"], navigationExtras);
        });
      });
  }

  submit() {
    var result = true;

    if (this.favfirst == "") {
      result = false;
    } else if (this.favsecond == "") {
      result = false;
    } else if (this.favthird == "") {
      result = false;
    } else if (this.favfour == "") {
      result = false;
    } else if (this.favfive == "") {
      result = false;
    } else if (this.favsix == "") {
      result = false;
    } else if (this.favseven == "") {
      result = false;
    } else if (this.faveight == "") {
      result = false;
    } else if (this.favnine == "") {
      result = false;
    } else if (this.favten == "") {
      result = false;
    }

    console.log(result);
    if (result === false) {
      this.dialog.open(dialogChecknull, {}).afterClosed();
    } else {
      this.openDialog();
      
    }
  }
}

@Component({
  selector: "dialog-overview",
  templateUrl: "dialog-overview.html",
})
export class dialogOverview {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<dialogOverview>
  ) {
    console.log("this.score ==> after", this.data.score);
  }
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
}

@Component({
  selector: "dialog-checknull",
  templateUrl: "dialog-checknull.html",
})
export class dialogChecknull {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<dialogChecknull>
  ) {}
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
}

export class depressiontest {}
