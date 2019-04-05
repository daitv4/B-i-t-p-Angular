import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListVideoComponent } from './list-video/list-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  { path:'youtube', component: SearchComponent, children: [
    { path: 'search/:key', component: ListVideoComponent },
    { path: ':id', component: VideoDetailsComponent }
  ] },
  { path: '', redirectTo: 'youtube/search/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
