import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ElementsProxyModule } from './elements-proxy/elements-proxy.module';
import { LoadableModule, matcher } from 'ngx-loadable';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ElementsProxyModule, LoadableModule.forRoot({
			moduleConfigs: [{
        name: 'elements-proxy',
        loadChildren: './elements-proxy/elements-proxy.module#ElementsProxyModule',
        matcher
      }]
		})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
