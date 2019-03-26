import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableService } from './service/table.service';
import { PhoneNumberPipe } from './common/phone-number.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipePipe } from './common/sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PhoneNumberPipe,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
