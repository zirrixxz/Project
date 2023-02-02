import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { map } from "rxjs";

export interface Emoji {
  bgcolor: string;
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: "app-score-result",
  templateUrl: "./score-result.component.html",
  styleUrls: ["./score-result.component.scss"],
})
export class ScoreResultComponent implements OnInit {
  constructor(private router: Router, public activatedRoute: ActivatedRoute) {}

  score = 0;
  level = "";
  emo: string = "";

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.score = Number(params["scoreResult"]);
      this.level = params["level"];
    });
    console.log(this.score);
    this.emoji();
  }
  emoji() {
    if (this.score != null && this.score != undefined) {
      if (this.score >= 19) {
        this.emo = "bi bi-emoji-frown-fill text-danger";
      } else if (this.score <= 18 && this.score >= 13) {
        this.emo = "bi bi-emoji-neutral-fill text-warning";
      } else if (this.score <= 12 && this.score >= 7) {
        this.emo = "bi bi-emoji-smile-fill text-primary";
      } else {
        this.emo = "bi bi-emoji-laughing-fill text-success";
      }
    }
  }
}
