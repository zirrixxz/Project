import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { CanActivateTeam } from "./guard";
export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/login-page", pathMatch: "full" },
      {
        path: "dashboard",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "about",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./about/about.module").then((m) => m.AboutModule),
      },
      {
        path: "component",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./component/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: "login-page",
        loadChildren: () =>
          import("./login-page/login-page.module").then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: "depressiontest",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./component/DepressionTest/depressiontest.module").then(
            (m) => m.DepressionTestModule
          ),
      },
      {
        path: "myhistory",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./component/my-history/my-history.module").then(
            (m) => m.MyHistoryModule
          ),
      },
      {
        path: "profile-info",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./profile-info/profile-page.module").then(
            (m) => m.ProfileInfoModule
          ),
      },
      {
        path: "scoreResult",
        canActivate: [CanActivateTeam],
        loadChildren: () =>
          import("./score-result/score-result.module").then(
            (m) => m.ScoreResultModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/starter",
  },
];
