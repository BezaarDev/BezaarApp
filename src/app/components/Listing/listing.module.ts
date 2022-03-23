import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared-components/shared.module";
import { ListingComponent } from "./listing.component";

@NgModule({
    declarations: [
        ListingComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([
        {
          path: '',
          component: ListingComponent,
          pathMatch: 'full'
        }
      ])
    ],
    exports: [
        ListingComponent
    ]
  })

export class ListingModule {}
