import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artists: Artist[] = [];
  public artistId: string = '';
  public over: boolean = false;
  constructor(
    private musicService: MusicService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.activatedRoute.params.subscribe(param => {
      this.musicService.getArtists(param.artist).subscribe((data: { artists: any}) => {
        this.artists = data.artists.items;
      });
    });
  }
}
