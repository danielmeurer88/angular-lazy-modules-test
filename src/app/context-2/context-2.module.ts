import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module/shared.module';
import { Context2RoutingModule } from './context-2-routing.module';
import { Context2Component } from './context-2.component';


@NgModule({
    declarations: [
      Context2Component
    ],
    imports: [
      SharedModule,
      Context2RoutingModule
    ],
    exports: [

    ],
    providers: []
})
export class Context2Module {

}
