import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DepressionTestService } from "../DepressionTest/depressiontest.service";
import { DepressionTestRes } from "../DepressionTest/depressiontest.type";
import * as moment from "moment";
import { DateAdapter } from "@angular/material/core";
import { FormControl, FormGroup } from "@angular/forms";

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: "app-my-history",
  templateUrl: "./my-history.component.html",
  styleUrls: ["./my-history.component.scss"],
})
export class MyHistoryComponent implements OnInit {
  roleName: string = localStorage.getItem("roleName") ?? "";
  constructor(
    private httpservice: DepressionTestService // private dateadapter: DateAdapter<Date>
  ) {
    // this.dateadapter.setLocale("en-GB");
  }
  datalist: DepressionTestRes[] = [];
  displayedColumns: string[] = [
    "Score",
    "Level",
    "Comment",
    "Last Updated",
    "Test Date",
  ];
  dataSource = new MatTableDataSource<DepressionTestRes>();

  moment = moment;

  DateRangePickerComparisonExample() {
    campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

  ngOnInit(): void {
    this.getServiceHistory();
  }

  getServiceHistory() {
    let id: string = localStorage.getItem("userId") ?? "";
    if (localStorage.getItem("roleName") == "Student") {
      this.httpservice.GetDepressionTestByStudent(id).subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource(response);
          this.datalist = response;
          console.log(this.datalist);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // this.httpservice
      //   .GetDepressionTestByTeacher(startTestDate, endTestDate)
      //   .subscribe(
      //     (response) => {
      //       console.log(response);
      //     },
      //     (error) => {
      //       console.log(error);
      //     }
      //   );
    }
  }
  convertToUTC(date: Date): Date {
    const dateReturn: Date = new Date(date);
    dateReturn.setHours(dateReturn.getHours() + 7);
    return dateReturn;
  }
}
