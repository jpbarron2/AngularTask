import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  allTasks: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    let obs = this._httpService.getTasks();
    obs.subscribe(data => {
      console.log("Got our tasks", data);
      this.allTasks = data;
    });
  }
}
