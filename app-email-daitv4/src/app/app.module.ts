import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyMessageComponent } from './main/my-message/my-message.component';
import { FolderComponent } from './main/my-message/folder/folder.component';
import { DetailsComponent } from './main/my-message/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MyMessageComponent,
    FolderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
