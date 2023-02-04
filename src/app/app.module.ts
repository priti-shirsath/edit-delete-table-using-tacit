import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdditemserviceComponent } from './additemservice/additemservice.component';
import { todolist } from './todolist';
import { EdititemserviceComponent } from './edititemservice/edititemservice.component';
import { DeleteitemserviceComponent } from './deleteitemservice/deleteitemservice.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemserviceComponent,
    EdititemserviceComponent,
    DeleteitemserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AdditemserviceComponent,EdititemserviceComponent,DeleteitemserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
