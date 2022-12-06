import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DepressionTestReq, DepressionTestRes } from "./depressiontest.type";

@Injectable({
    providedIn: "root",
})
export class DepressionTest {
    private rootURL = "https://localhost:7141/";
    constructor(private http: HttpClient) { }
    postDepressionTest(DepressionTest:DepressionTestReq) {
        return this.http.post<DepressionTestRes>(this.rootURL + "api/DepressionTest/AddDepressionTest",DepressionTest);
    }
     
    GetDepressionTestByStudent(userId: string) {
        return this.http.get<DepressionTestRes>(this.rootURL + "/api/DepressionTest/GetDepressionTestbyStudent?userId="+userId);
    }
}