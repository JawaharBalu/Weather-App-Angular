import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
