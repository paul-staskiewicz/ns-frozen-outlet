// angular
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-step2",
  moduleId: module.id,
  templateUrl: "./step2.component.html",
})
export class Step2Component implements OnInit, OnDestroy {
  constructor(
    private readonly routerExtensions: RouterExtensions,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {}

  public ngOnDestroy() {}

  public goToStep3() {
    console.log("go to step 3");

    this.routerExtensions.navigate(["../step3"], {
      relativeTo: this.activatedRoute,
    });
  }
}
