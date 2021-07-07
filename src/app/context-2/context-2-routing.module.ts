import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Context2Component } from './context-2.component';


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: Context2Component
        }
    ])],
    exports: [RouterModule]
})
export class Context2RoutingModule {

}
