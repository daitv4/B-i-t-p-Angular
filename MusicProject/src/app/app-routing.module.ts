import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ArtistComponent } from './main/artist/artist.component';
import { TrackComponent } from './main/track/track.component';
import { SearchComponent } from './main/search/search.component';

const routes: Routes = [
  { path: 'music', component: MainComponent, children: [
    { path: 'search', component: SearchComponent, children: [
      { path: ':artist', component: ArtistComponent }
    ]},
    { path: ':track', component: TrackComponent, outlet: 'track' }
  ] },
  { path: '', redirectTo: '/music/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
