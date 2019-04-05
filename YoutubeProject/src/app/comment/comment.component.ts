import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../service/video.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment[];
  constructor(private videoService: VideoService) {}

  ngOnInit() {
  }

}
