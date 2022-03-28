import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppAModule {
  /**
   * This method will be called by the host mfe.
   * @param injector Contains the provider regarding the host
   */
  public remoteBootstrap(injector: Injector): void {
    console.warn("Remote Boostrap called");
    const myCustomElement = createCustomElement(AppComponent, { injector });
    customElements.define("mfe-a", myCustomElement);
  }
}
