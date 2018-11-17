import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { CounterComponent } from './container/counter/counter.component';
import { InputComponent } from './container/input/input.component';
import { TotalComponent } from './container/total/total.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CounterComponent,
    InputComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
