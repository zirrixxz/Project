import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { DepressionTestComponent } from "./depressiontest.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "LoginPage",
      urls: [
        { title: "DepressionTest", url: "/DepressionTest" },
        { title: "DepressionTest" },
      ],
    },
    component: DepressionTestComponent,
  },
];

@NgModule({
  imports: [],
  declarations: [DepressionTestComponent],
})
export class DepressionTestModule {}
