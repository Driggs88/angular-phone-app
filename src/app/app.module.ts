import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PhoneService } from './phone.service';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { FileUploadModule } from "ng2-file-upload";



@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    AddPhoneComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule,

  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
