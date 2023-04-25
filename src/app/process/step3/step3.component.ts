// angular
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { TabsService } from "~/app/tabs/tabs.service";

@Component({
  selector: "ns-step3",
  moduleId: module.id,
  templateUrl: "./step3.component.html",
})
export class Step3Component implements OnInit, OnDestroy {
  constructor(
    private readonly routerExtensions: RouterExtensions,
    private readonly activatedRoute: ActivatedRoute,
    private readonly tabsService: TabsService
  ) {}

  public ngOnInit() {}

  public ngOnDestroy() {}

  public goToList() {
    console.log("go to step 3");

    //navigate back to step 1
    this.routerExtensions.navigate(["../"], {
      relativeTo: this.activatedRoute,
    });

    //set selected tab to list
    this.tabsService.selectedTab$.next(0);
  }
}
