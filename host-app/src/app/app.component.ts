import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { AppComponent } from 'remoteApp/Component';
@Component({
  selector: 'app-root',
  template: `<ng-template #dynamicContainer></ng-template>`,
   standalone: true,
})
export class RootAppComponent implements AfterViewInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(AppComponent);
    this.container.createComponent(factory);
  }
}