import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks() {
    let obs = this._http.get("/api/task");
    obs.subscribe(data => console.log("Got our tasks", data));
  }
}
