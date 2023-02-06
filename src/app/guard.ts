import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CanActivateTeam implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    var userId = localStorage.getItem("userId");
    if (userId != "" && userId != null && userId != undefined) {
      if (localStorage.getItem("roleName") == "Teacher") {
        if (
          state.url == "/dashboard" ||
          state.url == "/myhistory" ||
          state.url == "/profile-info"
        ) {
          return true;
        } else {
          this.router.navigate(["dashboard"]);
          return false;
        }
      } else {
        return true;
      }
    } else {
      this.router.navigate(["/login-page"]);
      return false;
    }
  }
}
