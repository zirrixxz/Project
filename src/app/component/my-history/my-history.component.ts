import { Component, Inject, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import * as moment from "moment";
import { FormControl, FormGroup } from "@angular/forms";
import { MyHistoryService } from "./my-history.service";
import {
  DepressionTestHistory,
  DepressionTestRes,
  EditCommentRequest,
} from "./my-history.type";
import { DatePipe } from "@angular/common";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

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
  id: string = "";

  constructor(
    private httpservice: MyHistoryService,
    public datepipe: DatePipe, // private dateadapter: DateAdapter<Date>
    public dialog: MatDialog
  ) {}
  displayColumnsForTeacher: string[] = [
    "FirstName",
    "LastName",
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
  }
  callDataForTeacher() {
    let startDate = this.datepipe.transform(
      this.range.value.start,
      "yyyy-MM-dd h:mm:ss"
    );

    let endDate = this.datepipe.transform(
      this.range.value.end,
      "yyyy-MM-dd h:mm:ss"
    );

    this.httpservice
      .GetDepressionTestByTeacher(startDate ?? "", endDate ?? "")
      .subscribe(
        (response) => {
          this.dataSourceForTecher = new MatTableDataSource(response);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getServiceHistory() {
    let id: string = localStorage.getItem("userId") ?? "";
    let startDate = this.datepipe.transform(
      this.range.value.start,
      "yyyy-MM-dd h:mm:ss"
    );
    let endDate = this.datepipe.transform(
      this.range.value.end,
      "yyyy-MM-dd h:mm:ss"
    );

    if (localStorage.getItem("roleName") == "Student") {
      this.httpservice
        .GetDepressionTestByStudent(id, startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.dataSource = new MatTableDataSource(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
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

  applyFilerStudent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogComment, {
      data: { studentId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let comfirmed: EditCommentRequest = {
          id: id,
          comment: result ?? "",
        };
        this.httpservice.PostEditComment(comfirmed).subscribe((response) => {
          if (response) {
           this.callDataForTeacher()
            
          }
        });
      }
    });
  }
}

@Component({
  selector: "dialog-comment",
  templateUrl: "dialog-comment.html",
})
export class DialogComment {
  studentId: string = this.data.id;
  comment: string = "";
  constructor(
    public dialogRef: MatDialogRef<DialogComment>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(this.comment);
  }
}
