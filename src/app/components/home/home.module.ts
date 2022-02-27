import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared-components/shared.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      SharedModule,
      RouterModule.forChild([
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        }
      ])
    ],
    exports: [
      HomeComponent
    ]
  })

export class HomeModule {}
