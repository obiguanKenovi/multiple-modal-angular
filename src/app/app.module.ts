import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { FirstModalComponent } from './first-modal/first-modal.component';
import { SecondModalComponent } from './second-modal/second-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AddNotificationComponent,
    ModalTestComponent,
    MainComponent,
    FirstModalComponent,
    SecondModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
