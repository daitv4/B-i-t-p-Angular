import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../models/video';
import { VideoService } from '../service/video.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  public videos: Video[];
  public item: Item;
  public urlVideo: SafeResourceUrl;
  public maxResultsVideo = 22;
  public comment: Comment[];
  public maxResultsComment = 15;
  public width: number = window.innerWidth / 1.89;
  public height: number = this.width / 1.5;
  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit() {
    this.getRelatedToVideo();
    this.getVideo();
    this.getComment();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.width = window.innerWidth / 1.9;
      this.height = this.width / 1.6;
    }

  getVideo() {
    return this.activatedRoute.params.subscribe(param => {
      this.videoService
        .getVideoById(param.id)
        .subscribe((result: { items: any[] }) => {
          this.item = result.items[0];
          this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube.com/embed/' + this.item.id + '?autoplay=1'
          );
        });
    });
  }

  getRelatedToVideo() {
    return this.activatedRoute.params.subscribe(param => {
      this.videoService
        .getRelatedToVideo(param.id, this.maxResultsVideo.toString())
        .subscribe((result: { items: any[] }) => {
          this.videos = result.items;
        });
    });
  }

  onClickPage() {
    this.maxResultsVideo += 8;
    this.maxResultsComment += 10;
    this.getRelatedToVideo();
    this.getComment();
  }

  getComment() {
    return this.activatedRoute.params.subscribe(param => {
      this.videoService.getComment(param.id, this.maxResultsComment.toString()).subscribe((result: {items: any[]}) => {
        this.comment = result.items;
      });
    });
  }

}
