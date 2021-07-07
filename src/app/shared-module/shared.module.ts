import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogdModule } from './services/dialog-service/dialog.module';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DialogdModule
    ],
    exports: [
      DialogdModule
    ]
})
export class SharedModule {

}
