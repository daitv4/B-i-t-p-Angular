import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-video',
  templateUrl: './related-video.component.html',
  styleUrls: ['./related-video.component.css']
})
export class RelatedVideoComponent implements OnInit {
  @Input()
  videos: Video[];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickItem(item: Video) {
    this.router.navigateByUrl('/youtube/watch/' + item.id.videoId);
  }
}
