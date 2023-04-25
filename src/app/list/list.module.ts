// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// nativescript
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

// app
import { ListComponent } from "./list.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: "",
        component: ListComponent,
      },
    ]),
  ],
  declarations: [ListComponent],
  entryComponents: [],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ListModule {}
