import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}