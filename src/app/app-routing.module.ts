import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/tabs/default",
  },
  {
    path: "tabs",
    canActivate: [],
    loadChildren: () =>
      import("@/app/tabs/tabs.module").then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
