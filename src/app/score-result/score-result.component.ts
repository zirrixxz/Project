import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: "app-score-result",
  templateUrl: "./score-result.component.html",
  styleUrls: ["./score-result.component.scss"],
})
export class ScoreResultComponent implements OnInit {
  constructor(private router: Router, public activatedRoute: ActivatedRoute) {}

  score = 0;
  level = "";

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.score = Number(params["scoreResult"]);
      this.level = params["level"];
    });
    console.log(this.score);
    
  }

}
