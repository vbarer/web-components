import {DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomCanvasComponent } from './components/custom-canvas/custom-canvas.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    CustomCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [CustomCanvasComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const webComponent = createCustomElement(CustomCanvasComponent, {injector: this.injector});
    customElements.define('custom-canvas', webComponent);
  }
}
