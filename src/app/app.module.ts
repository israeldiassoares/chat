import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatAppComponent } from "./components/chat-app/chat-app.component";
import { MainComponent } from "./components/main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatAppComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ]
})
export class AppModule { }
