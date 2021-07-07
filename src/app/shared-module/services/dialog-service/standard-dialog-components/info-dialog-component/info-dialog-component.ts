
import { Component, ElementRef, OnInit } from '@angular/core'


@Component({
    selector: 'info-dialog-component',
    templateUrl: './info-dialog-component.html',
    styleUrls: ['./info-dialog-component.scss']
})
export class InfoDialogComponent implements OnInit {

    text: string = 'Test';

    constructor(private readonly elementRef: ElementRef) { }

    ngOnInit() { }

}
