import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElementComponent } from './element.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

// TODO: https://www.code-sample.com/2018/07/create-custom-element-angular-6.html
// import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ],
  exports: [ElementComponent],
  providers: [PopupService],
  declarations: [ElementComponent, PopupComponent],
  bootstrap: [ElementComponent],
})
export class ElementModule {
  //   constructor(private injector: Injector) {
  //   //The customElements is used for defining a custom element globaly.
  //   const customElement = createCustomElement(PopupComponent, { injector });
  //   //Defining a new element
  //   customElements.define('popup-custom', customElement);
  // }
}
