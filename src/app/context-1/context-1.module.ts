import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module/shared.module';
import { Context1RoutingModule } from './context-1-routing.module';
import { Context1Component } from './context-1.component';


@NgModule({
    declarations: [
        Context1Component
    ],
    imports: [
        SharedModule,
        Context1RoutingModule
    ],
    exports: [

    ],
    providers: []
})
export class Context1Module {

}
