import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/service/music.service';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public tracks: Track[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks() {
    return this.activatedRoute.params.subscribe(param => {
      this.musicService.getTracksByArtist(param.track).subscribe((result: { tracks: []}) => {
        this.tracks = result.tracks;
      });
    })
  }
}
