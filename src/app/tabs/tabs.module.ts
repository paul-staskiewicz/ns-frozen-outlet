// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// nativescript
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { TabsService } from "./tabs.service";

// app
import { TabsComponent } from "./tabs/tabs.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: "default",
        component: TabsComponent,
        children: [
          {
            path: "list",
            outlet: "list",
            pathMatch: "prefix",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/list/list.module").then((m) => m.ListModule),
          },
          {
            path: "process",
            outlet: "process",
            pathMatch: "prefix",
            component: NSEmptyOutletComponent,
            loadChildren: () =>
              import("~/app/process/process.module").then(
                (m) => m.ProcessModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [TabsComponent],
  entryComponents: [],
  providers: [TabsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {}
