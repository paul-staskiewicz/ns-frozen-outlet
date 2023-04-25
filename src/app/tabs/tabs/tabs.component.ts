// angular
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  BottomNavigation,
  SelectedIndexChangedEventData,
} from "@nativescript-community/ui-material-bottom-navigation";

// nativescript
import { RouterExtensions } from "@nativescript/angular";
import { BehaviorSubject } from "rxjs";
import { TabsService } from "../tabs.service";

@Component({
  selector: "ns-tabs",
  templateUrl: "tabs.component.html",
})
export class TabsComponent implements OnInit {
  @ViewChild("bottomNavigation", { static: false })
  public bottomNavigation: ElementRef<BottomNavigation>;

  public selectedIndex$ = this.tabsService.selectedTab$;

  constructor(
    private readonly routerExt: RouterExtensions,
    private readonly activeRoute: ActivatedRoute,
    private readonly tabsService: TabsService
  ) {}

  public ngOnInit(): void {
    this.routerExt.navigate(
      [
        {
          outlets: {
            list: ["list"],
            process: ["process"],
          },
        },
      ],
      { relativeTo: this.activeRoute }
    );
  }

  public selectedIndexChanged(args: SelectedIndexChangedEventData) {
    this.tabsService.selectedTab$.next(args.newIndex);
  }
}
