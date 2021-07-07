import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs/';
import { first, take } from 'rxjs/operators';

@Component({
    selector: 'test-cmp',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    constructor(public readonly activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        this.activatedRoute.params.pipe(take(2)).subscribe(data => {
            console.log('async?', data);
        });

        console.log('sync', this.activatedRoute);

    }

}
