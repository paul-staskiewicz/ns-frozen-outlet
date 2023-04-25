// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// nativescript
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

// app
import { ProcessComponent } from "./process.component";

import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      { path: "", pathMatch: "full", redirectTo: "step1" },
      {
        path: "step1",
        component: Step1Component,
      },
      {
        path: "step2",
        component: Step2Component,
      },
      {
        path: "step3",
        component: Step3Component,
      },
    ]),
  ],
  declarations: [
    ProcessComponent,
    Step1Component,
    Step2Component,
    Step3Component,
  ],
  entryComponents: [],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProcessModule {}
