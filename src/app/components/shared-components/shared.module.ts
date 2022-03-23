import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DropdownButtonComponent } from "./dropdown-button/dropdown-button.component";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      DropdownButtonComponent
    ],
    imports: [
      BsDropdownModule.forRoot(),
      CommonModule
    ],
    exports: [DropdownButtonComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

export class SharedModule {}
