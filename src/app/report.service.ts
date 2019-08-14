import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Report } from "./data/Report";
import { AppType } from "./appType";
import { CodeBase } from "./codeBase";
import { SourceCode } from "./sourceCode";


@Injectable({
  providedIn: "root"
})
export class ReportService {
  private CodeBases: any[] = [];
  private static readonly FORM_PAGE_URL = "http://10.236.246.25:8081/report/";
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}
  getReport(language: string): Observable<Report> {
    
    return this.http.get<Report>(ReportService.FORM_PAGE_URL + language);
  }
  
  getCodeBaseService() {
    return this.http.get("../assets/CodeBase.json").subscribe(data => {
      // this.CodeBases = data as CodeBase[];
      this.CodeBases.push(data);
    });
   
  }
  getAppType() {
    return [
      new AppType(1, "MicroService"),
      new AppType(2, "UI"),
      new AppType(3, "Legacy")
    ];
  }
  getCodeBases() {
    return this.CodeBases[0] ;
  }

  getSourceCode() {
    return [
      new SourceCode(1, "Git"),
      new SourceCode(2, "SVN"),
      new SourceCode(3, "TFS"),
      new SourceCode(4, "CVS")
    ];
  }
}
