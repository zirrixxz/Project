import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import * as moment from "moment";
import { DateAdapter } from "@angular/material/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MyHistoryService } from "./my-history.service";
import { DepressionTestHistory, DepressionTestRes } from "./my-history.type";
import { DatePipe } from "@angular/common";

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
    private httpservice: MyHistoryService,
    public datepipe: DatePipe // private dateadapter: DateAdapter<Date>
  ) {
    // this.dateadapter.setLocale("en-GB");
  }
  displayColumnsForTeacher: string[] = [
    "UserId",
    "ScoreResult",
    "LevelResult",
    "Comment",
    "LastUpdated",
    "Test Date",
  ];
  displayedColumns: string[] = [
    "Score",
    "Level",
    "Comment",
    "Last Updated",
    "Test Date",
  ];

  dataSource = new MatTableDataSource<DepressionTestRes>();
  dataSourceForTecher = new MatTableDataSource<DepressionTestHistory>();
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  moment = moment;

  ngOnInit(): void {
    this.getServiceHistory();
    console.log(this.campaignOne);
  }
  callDataForTeacher() {
    let startDate = this.datepipe.transform(
      this.range.value.start,
      "yyyy-MM-dd h:mm:ss"
    );
    console.log(startDate);
    let endDate = this.datepipe.transform(
      this.range.value.end,
      "yyyy-MM-dd h:mm:ss"
    );
    console.log(endDate);
    this.httpservice
      .GetDepressionTestByTeacher(endDate ?? "", startDate ?? "")
      .subscribe(
        (response) => {
          console.log(response);

          this.dataSourceForTecher = new MatTableDataSource(response);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log(this.range.value.start);
    console.log(this.range.value.start);
  }

  getServiceHistory() {
    let id: string = localStorage.getItem("userId") ?? "";
    if (localStorage.getItem("roleName") == "Student") {
      this.httpservice.GetDepressionTestByStudent(id).subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource(response);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForTecher.filter = filterValue.trim().toLowerCase();
  }
}
