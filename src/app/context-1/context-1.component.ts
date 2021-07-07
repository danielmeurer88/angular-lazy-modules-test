import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-context-1',
    templateUrl: './context-1.component.html',
    styleUrls: ['./context-1.component.scss']
})
export class Context1Component implements OnInit {

    @HostBinding('class.main-component')
    classVar = true;

    constructor() { }

    ngOnInit(): void {
    }

}
