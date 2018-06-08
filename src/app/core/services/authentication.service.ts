import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {LoginObject} from "./../models/login-object.model";
import {Session} from "./../models/session.model";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {}

  private basePath = 'http://dev.contanimacion.com/birds/public/login/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post(this.basePath, loginObj).pipe(map(this.extractData));
  }

  logout(): Observable<Boolean> {
    return this.http.post(this.basePath, {}).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
