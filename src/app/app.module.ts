import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OnfidoLayout } from './onfido/onfido';

registerElement('OnfidoLayout', () => OnfidoLayout);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
