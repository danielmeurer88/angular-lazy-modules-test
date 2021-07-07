import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogInsertionDirective } from './dialog-insertion.directive';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { InfoDialogComponent } from './standard-dialog-components/info-dialog-component/info-dialog-component';


@NgModule({
    declarations: [
        DialogComponent,
        DialogInsertionDirective,
        InfoDialogComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        DialogComponent
    ],
    providers: [
        DialogService
    ]
})
export class DialogdModule {

}
