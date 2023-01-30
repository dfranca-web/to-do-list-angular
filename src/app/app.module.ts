import { HomeModule } from './modules/home/home.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
