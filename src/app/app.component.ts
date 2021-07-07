import { Component } from '@angular/core';
import { DialogService } from './shared-module/services/dialog-service/dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'lazy-modules';

    constructor(private readonly dialogService: DialogService) {}

    test() {

        this.dialogService.info('There are infos');

    }

}
