// angular
import { Injectable } from "@angular/core";

// third party
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TabsService {
  public selectedTab$: BehaviorSubject<number> = new BehaviorSubject(0);
}
