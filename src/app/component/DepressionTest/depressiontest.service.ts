import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  DeleteDepressionTestReq,
  DepressionTestReq,
  DepressionTestRes,
} from "./depressiontest.type";

@Injectable({
  providedIn: "root",
})
export class DepressionTestService {
  private rootURL = "https://localhost:8081/";
  constructor(private http: HttpClient) {}
  
  postAddDepressionTest(depressionTest: DepressionTestReq) {
    // return this.http.post<DepressionTestRes>(
    //   this.rootURL +
    //     "api/DepressionTest/AddDepressionTest" +
    //     `?UserId=${DepressionTest.userId}&ScoreResult=${DepressionTest.scoreResult}&TestDate=${DepressionTest.TestDate}`,
    //   DepressionTest
    //);
    return this.http.post<DepressionTestRes>(this.rootURL + "api/DepressionTest/AddDepressionTest",depressionTest);    
  }


//   postLoginApi(login:LoginReq) {
//     return this.http.post<LoginResult>(this.rootURL + "api/User/Login",login);
// }

  GetDepressionTestByStudent(userId: string) {
    return this.http.get<DepressionTestRes[]>(
      this.rootURL +
        "api/DepressionTest/GetDepressionTestbyStudent?userId=" +
        userId
    );
  }

  DeleteDepressionTest(DepressionTest: DeleteDepressionTestReq) {
    return this.http.get<DepressionTestRes>(
      this.rootURL + "api/DepressionTest/DeleteDepressionTest" + DepressionTest
    );
  }
}
