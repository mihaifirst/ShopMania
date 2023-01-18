import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClientsComponent} from "./clients.component";
import {ClientsService} from "./clients.service";
import {SharedModule} from "../../shared/shared.module";
import {ClientModalComponent} from "./client-modal/client-modal.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [ClientsComponent, ClientModalComponent],
  declarations: [ClientsComponent, ClientModalComponent],
  providers: [ClientsService],
  entryComponents: [ClientModalComponent]
})

export class ClientsModule{}
