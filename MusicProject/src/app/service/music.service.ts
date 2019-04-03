import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private url = 'https://api.spotify.com/v1/';
  private urlTrack = 'https://api.spotify.com/v1/artists/3x6FwiNj93pnxxMDNRA1IR/top-tracks?country=vn';
  constructor(
    private http: HttpClient
  ) { }

  getArtists(key: string) {
    return this.http.get(this.url + 'search', { params: {
       q: key, type: 'artist'
    }});
  }

  getTracksByArtist(artistId: string) {
    return this.http.get(this.url + 'artists/' + artistId + '/top-tracks?country=vn');
  }
}
