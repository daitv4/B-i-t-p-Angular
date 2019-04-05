import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoService } from './service/video.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommentComponent } from './comment/comment.component';
import { RelatedVideoComponent } from './related-video/related-video.component';
import { FormatNumberPipe } from './commont/format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListVideoComponent,
    VideoDetailsComponent,
    CommentComponent,
    RelatedVideoComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
