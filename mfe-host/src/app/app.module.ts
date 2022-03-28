import { loadRemoteModule } from '@angular-architects/module-federation';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
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
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor(private injector: Injector) {
    this.doBootstrap();

  }

  doBootstrap(): void {

    // This is a dummy example, in real world we can fetch this info
    // from a remote server.
    const childrenModules: any[] = [
      {
        labelName: "mfe-a",
        remoteName: "mfeAppA",
        remoteEntry: "http://localhost:5000/remoteEntry.js",
        exposedModule: "./AppAModule"
      },
      // 'mfe-b': {
      //   remoteUrl: "http://localhost:6000/remoteEntry.js",
      // },
      // 'mfe-c': {
      //   remoteUrl: "http://localhost:7000/remoteEntry.js",
      // }
    ];

    childrenModules.forEach(async (childrenModule) => {

      const remoteModule = await loadRemoteModule({
        remoteEntry: childrenModule.remoteEntry,
        exposedModule: childrenModule.exposedModule,
        remoteName: childrenModule.remoteName

      });

      const moduleName = childrenModule.exposedModule.substring(2);
      const moduleInstance = new remoteModule[moduleName]();

      moduleInstance.remoteBootstrap(this.injector);

    });
  }
}
