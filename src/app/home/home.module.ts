import { NgModule } from '@angular/core';
import { SharedModule } from '../shared-module/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      SharedModule,
      HomeRoutingModule
    ],
    exports: [

    ],
    providers: []
})
export class HomeModule {

}
