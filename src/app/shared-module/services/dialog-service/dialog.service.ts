import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type, ViewContainerRef } from "@angular/core";
import { DialogComponent } from "./dialog.component";
import { InfoDialogComponent } from "./standard-dialog-components/info-dialog-component/info-dialog-component";

@Injectable()
export class DialogService {

    dialogComponentRef!: ComponentRef<DialogComponent>;

    constructor(
        private readonly injector: Injector,
        private readonly appRef: ApplicationRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) { }

    info(text: string) {
        this.open(InfoDialogComponent);
    }

    open(componentType: Type<any>) {
        this.appendDialogComponentToBody();
        this.dialogComponentRef.instance.childComponentType = componentType;
        this.dialogComponentRef.instance.closeFnRef = this.getCloseFunction();
    }

    private appendDialogComponentToBody() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        const componentRef = componentFactory.create(this.injector);

        this.dialogComponentRef = componentRef;

        this.appRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
    }

    getCloseFunction(): () => void {
        return () => this.removeDialogComponentFromBody();
    }

    private removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }

}
