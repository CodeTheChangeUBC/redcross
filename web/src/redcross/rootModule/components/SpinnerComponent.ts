import {
    Component, Directive, ComponentFactory,
    ComponentFactoryResolver, ViewContainerRef, ComponentRef} from "@angular/core";

@Component({
    selector: "redcross-spinner",
    templateUrl: "./Spinner.ng.html",
    styleUrls: ["./Spinner.less"]
})
export class SpinnerComponent {}

@Directive({
    selector: "[spinner]"
})
export class SpinnerAnchor {
    private _spinnerRef: ComponentRef<SpinnerComponent>;

    constructor(
        private _componentFactory: ComponentFactoryResolver,
        private _viewContainerRef: ViewContainerRef
    ) {}

    public createSpinner(): void {
        this._viewContainerRef.clear();
        const spinnerComponentFactory: ComponentFactory<SpinnerComponent> =
            this._componentFactory.resolveComponentFactory(SpinnerComponent);
        this._spinnerRef = this._viewContainerRef.createComponent(spinnerComponentFactory);
    }

    public destroySpinner(): void {
        if (this._spinnerRef) {
            this._spinnerRef.destroy();
        }
        this._spinnerRef = undefined;
    }

}
