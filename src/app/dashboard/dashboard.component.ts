import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { DashboardService } from "./dashboard.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
} from "ng-apexcharts";

import { DatePipe } from "@angular/common";
import { __values } from "tslib";
import * as moment from "moment";
import { DepressionTestHistoryGroup } from "./dashboard.type";
import { style } from "@angular/animations";

//declare var require: any;
export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements AfterViewInit, OnInit {
  subtitle: string;
  roleName  = localStorage.getItem("roleName") == "Student";
  id: string = "";
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public studentChartOptions: Partial<salesChartOptions>;
  constructor(
    public httpservice: DashboardService,
    public datepipe: DatePipe,
    private _cdr: ChangeDetectorRef
  ) {
    this.subtitle = "This is some text within a card block.";
    this.studentChartOptions = {
      series: [
        {
          name: "score",
          data: this.yaxis,
        },
      ],
      chart: {
        fontFamily: "Rubik,sans-serif",
        height: 265,
        type: "bar",
        toolbar: {
          show: false,
        },
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          barHeight: "70%",
          borderRadius: 3,
        },
      },
      colors: ["#b02c3a", "#6771dc"],
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: this.xaxis,
      },
      tooltip: {
        theme: "dark",
      },
    };
    this.studentChartOptions = {
      series: [
        {
          name: "score",
          data: this.yaxis,
        },
      ],
      chart: {
        fontFamily: "Rubik,sans-serif",
        height: 265,
        type: "bar",
        toolbar: {
          show: false,
        },
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          barHeight: "70%",
          borderRadius: 3,
        },
      },
      colors: ["#b02c3a", "#6771dc"],
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: this.xaxis,
      },
      tooltip: {
        theme: "dark",
      },
    };
  }
  moment = moment;
  today = new Date();
  setdate = new Date(this.today);
  xaxis: string[] = [];
  yaxis: number[] = [];
  i: number = 30;
  m: number = 7;
  freqStudent: number = 0;
  dangerCount: number = 0; //อันตราย
  normalCount: number = 0; //ปกติเฉยๆ
  wellCount: number = 0; //ดี
  chillCount: number = 0; //ไม่มีอาการ

  isDate: Boolean = false;

  getNumDefult() {
    this.yaxis = [];
    this.xaxis = [];
    this.isDate = true;
    //วันปัจจุบัน
    let startDate = this.moment(this.today)
      .add(-this.i, "day")
      .format("YYYY-MM-DD 12:00");

    let endDate = this.moment(this.setdate).format("YYYY-MM-DD 12:00");
    //วันที่นับถอยหลังไป30

    if (localStorage.getItem("roleName") == "Student") {
      let id: string = localStorage.getItem("userId") ?? "";
      this.httpservice
        .GetDepressionTestByStudent(id, startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;
            response.forEach((values) => {
              this.yaxis.push(values.scoreResult);

              this.studentChartOptions.series = [{ data: this.yaxis }];
              this._cdr.detectChanges();

              let changeFormat = this.datepipe.transform(
                values.testDate,
                "dd-MMM-yyyy hh:mm"
              );
              this.xaxis.push(changeFormat ?? "");
              this.studentChartOptions.xaxis = { categories: this.xaxis };
            });

            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }
              this.statusLevel();
            });
          },

          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log(startDate, endDate);

      this.httpservice
        .GetDepressionTestByTeacher(startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.freqStudent = response.length;

            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;

            var list: DepressionTestHistoryGroup[] = [];
            response.forEach((element) => {
              var index = list.findIndex((item) => {
                let dateCheck = this.datepipe.transform(
                  element.testDate,
                  "dd-MMM-yyyy"
                );
                return dateCheck == item.date;
              });

              if (index >= 0) {
                list[index].list.push(element);
              } else {
                let date =
                  this.datepipe.transform(element.testDate, "dd-MMM-yyyy") ??
                  "";
                var model: DepressionTestHistoryGroup = {
                  date: date,
                  list: [element],
                };
                list.push(model);
              }
            });

            console.log(response);

            // top chart
            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }
              this.statusLevel();
            });

            // center chart
            list.forEach((values) => {
              this.yaxis.push(values.list.length);
              this.studentChartOptions.series = [
                { name: "student count: ", data: this.yaxis },
              ];
              this._cdr.detectChanges();
              this.xaxis.push(values.date ?? "");
              this.studentChartOptions.xaxis = { categories: this.xaxis };
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getNumDate() {
    this.yaxis = [];
    this.xaxis = [];
    this.isDate = false;
    let id: string = localStorage.getItem("userId") ?? "";
    //วันปัจจุบัน
    let startDate = this.moment(this.today)
      .add(-this.m, "day")
      .format("YYYY-MM-DD 12:00");

    //วันที่นับถอยหลังไป30
    let endDate = this.datepipe.transform(
      this.setdate,

      "yyyy-MM-dd 12:00"
    );
    if (localStorage.getItem("roleName") == "Student") {
      this.httpservice
        .GetDepressionTestByStudent(id, startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;
            response.forEach((values) => {
              this.yaxis.push(values.scoreResult);

              this.studentChartOptions.series = [{ data: this.yaxis }];
              this._cdr.detectChanges();

              let changeFormat = this.datepipe.transform(
                values.testDate,
                "dd-MMM-yyyy hh:mm"
              );
              this.xaxis.push(changeFormat ?? "");
              this.studentChartOptions.xaxis = { categories: this.xaxis };
            });
            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }
              this.statusLevel();
            });
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.httpservice
        .GetDepressionTestByTeacher(startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.freqStudent = response.length;
            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;
            var list: DepressionTestHistoryGroup[] = [];
            response.forEach((element) => {
              var index = list.findIndex((item) => {
                let dateCheck = this.datepipe.transform(
                  element.testDate,
                  "dd-MMM-yyyy"
                );
                return dateCheck == item.date;
              });

              if (index >= 0) {
                list[index].list.push(element);
              } else {
                let date =
                  this.datepipe.transform(element.testDate, "dd-MMM-yyyy") ??
                  "";
                var model: DepressionTestHistoryGroup = {
                  date: date,
                  list: [element],
                };
                list.push(model);
              }
            });

            console.log(response);

            // top chart
            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }
              this.statusLevel();
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getNumMonth() {
    this.yaxis = [];
    this.xaxis = [];
    this.dangerCount = 0;
    this.chillCount = 0;
    this.wellCount = 0;
    this.normalCount = 0;
    this.isDate = true;
    let id: string = localStorage.getItem("userId") ?? "";
    //วันปัจจุบัน
    let startDate = this.moment(this.today)
      .add(-this.i, "day")
      .format("YYYY-MM-DD 12:00");

    //วันที่นับถอยหลังไป30
    let endDate = this.datepipe.transform(
      this.setdate,

      "yyyy-MM-dd 12:00"
    );
    if (localStorage.getItem("roleName") == "Student") {
      this.httpservice
        .GetDepressionTestByStudent(id, startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;
            response.forEach((values) => {
              this.yaxis.push(values.scoreResult);

              this.studentChartOptions.series = [{ data: this.yaxis }];
              this._cdr.detectChanges();

              let changeFormat = this.datepipe.transform(
                values.testDate,
                "dd-MMM-yyyy hh:mm"
              );
              this.xaxis.push(changeFormat ?? "");
              this.studentChartOptions.xaxis = { categories: this.xaxis };
            });
            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }
              this.statusLevel();
            });
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.httpservice
        .GetDepressionTestByTeacher(startDate ?? "", endDate ?? "")
        .subscribe(
          (response) => {
            this.freqStudent = response.length;
            this.yaxis = [];
            this.xaxis = [];
            this.dangerCount = 0;
            this.chillCount = 0;
            this.wellCount = 0;
            this.normalCount = 0;
            var list: DepressionTestHistoryGroup[] = [];
            response.forEach((element) => {
              var index = list.findIndex((item) => {
                let dateCheck = this.datepipe.transform(
                  element.testDate,
                  "dd-MMM-yyyy"
                );
                return dateCheck == item.date;
              });

              if (index >= 0) {
                list[index].list.push(element);
              } else {
                let date =
                  this.datepipe.transform(element.testDate, "dd-MMM-yyyy") ??
                  "";
                var model: DepressionTestHistoryGroup = {
                  date: date,
                  list: [element],
                };
                list.push(model);
              }
            });

            console.log(response);

            // top chart
            response.forEach((values) => {
              switch (values.levelResult) {
                case "รุนแรง":
                  this.dangerCount++;
                  break;
                case "ปานกลาง":
                  this.normalCount++;
                  break;
                case "เล็กน้อย":
                  this.wellCount++;
                  break;
                case "ไม่มีอาการ":
                  this.chillCount++;
                  break;
              }

              this.statusLevel();
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
  topcards: topcard[] = [];
  statusLevel() {
    this.topcards = [
      {
        bgcolor: "info",
        icon: "bi bi-hand-thumbs-up",
        title: this.chillCount,
        subtitle: "None",
      },
      {
        bgcolor: "success",
        icon: " bi bi-emoji-smile",
        title: this.wellCount,
        subtitle: "Mild",
      },
      {
        bgcolor: "warning",
        icon: "bi bi-emoji-neutral",
        title: this.normalCount,
        subtitle: "Moderate",
      },
      {
        bgcolor: "danger",
        icon: "bi bi-emoji-frown",
        title: this.dangerCount,
        subtitle: "Severe",
      },
    ];
  }
  ngOnInit(): void {
    this.getNumDefult();
  }

  ngAfterViewInit() {}
}

export interface topcard {
  bgcolor: string;
  icon: string;
  title: number;
  subtitle: string;
}
