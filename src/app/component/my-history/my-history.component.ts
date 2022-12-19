import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DepressionTestService } from "../DepressionTest/depressiontest.service";
import { DepressionTestRes } from "../DepressionTest/depressiontest.type";
import * as moment from "moment";
import { DateAdapter } from "@angular/material/core";

@Component({
  selector: "app-my-history",
  templateUrl: "./my-history.component.html",
  styleUrls: ["./my-history.component.scss"],
})
export class MyHistoryComponent implements OnInit {
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

  ngOnInit(): void {
    this.getServiceHistory();
  }

  getServiceHistory() {
    let id: string = "065ba912-9ebd-49d3-81d7-08c013c5a1fe";
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
  }
  convertToUTC(date: Date): Date {
    const dateReturn: Date = new Date(date);
    dateReturn.setHours(dateReturn.getHours() + 7);
    return dateReturn;
  }
}
