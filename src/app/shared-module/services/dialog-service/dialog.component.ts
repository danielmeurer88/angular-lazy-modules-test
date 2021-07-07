
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, NgZone, OnDestroy, OnInit, Type, ViewChild } from '@angular/core'
import { Subject } from 'rxjs';
import { DialogInsertionDirective } from './dialog-insertion.directive';

export interface DialogComponentOptions {

    overlayClickCloses: boolean;
    escapeKeyCloses: boolean;

}


@Component({
    selector: 'dialog-component',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

    private readonly _onClose = new Subject<any>();

    @ViewChild(DialogInsertionDirective)
    insertionPoint!: DialogInsertionDirective;

    childComponentType!: Type<any>;

    componentRef!: ComponentRef<any>;

    closeFnRef!: () => void;

    constructor(private readonly componentFactoryResolver: ComponentFactoryResolver, private readonly elementRef: ElementRef, private readonly ngZone: NgZone) { }

    ngOnInit() {
        console.log('ngOnInit');
        const el = this.elementRef.nativeElement as HTMLElement;
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('keydown', this.keydownOnOverlay);
            el.addEventListener('click', this.clickOnOverlay);
            (el.children[0] as HTMLElement).addEventListener('click', this.clickOnDialog);
        });
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        Promise.resolve().then(() => {
            this.loadChildComponent(this.childComponentType);
        });

    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
        const el = this.elementRef.nativeElement as HTMLElement;
        window.removeEventListener('keydown', this.keydownOnOverlay);
        el.removeEventListener('click', this.clickOnOverlay);
        (el.children[0] as HTMLElement).removeEventListener('click', this.clickOnDialog);
    }

    private clickOnOverlay = (e: MouseEvent) => {
        this.closeFnRef();
    };

    private clickOnDialog = (e: MouseEvent) => {
        e.stopPropagation();
    };

    private keydownOnOverlay = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.closeFnRef();
        }
    };



    private loadChildComponent(componentType: Type<any>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        const viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }

}
