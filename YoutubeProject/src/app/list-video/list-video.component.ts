import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../models/video';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {
  public videos: Video[] = [];
  public channel = {};
  public p: number = 1;
  public type = '';
  public maxResults = 15;
  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getVideos('relevance');
  }

  getVideos(type) {
    this.type = type;
    return this.activatedRoute.params.subscribe(param => {
      this.videoService
        .getVideos(param.key, this.type, this.maxResults.toString())
        .subscribe((result: { items }) => {
          this.videos = result.items;
        });
    });
  }

  onClickItem(video: Video) {
    this.router.navigateByUrl('/youtube/watch/' + video.id.videoId);
  }

  onClickPage() {
    this.maxResults += 7;
    this.getVideos(this.type);
  }
}
