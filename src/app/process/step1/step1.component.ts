// angular
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-step1",
  moduleId: module.id,
  templateUrl: "./step1.component.html",
})
export class Step1Component implements OnInit, OnDestroy {
  constructor(
    private readonly routerExtensions: RouterExtensions,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {}

  public ngOnDestroy() {}

  public goToStep2() {
    console.log("go to step 2");

    this.routerExtensions.navigate(["../step2"], {
      relativeTo: this.activatedRoute,
    });
  }
}
