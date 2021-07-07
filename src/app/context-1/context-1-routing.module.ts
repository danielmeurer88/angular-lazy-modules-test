import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Context1Component } from './context-1.component';


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: Context1Component
        }
    ])],
    exports: [RouterModule]
})
export class Context1RoutingModule {

}
