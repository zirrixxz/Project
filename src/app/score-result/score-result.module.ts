import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ScoreResultComponent } from "./score-result.component";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

const routes: Routes = [
  {
    path: "",

    component: ScoreResultComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [ScoreResultComponent],
})
export class ScoreResultModule {}
