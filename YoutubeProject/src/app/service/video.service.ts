import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'https://www.googleapis.com/youtube/v3/';
  private key = 'AIzaSyAKu0w6Lemet6ZdV05qQ13OnwQnbCWYd14';
  constructor(
    private http: HttpClient
  ) { }

  getVideos(keySearch: string, order: string, maxResults: string) {
    return this.http.get(this.url + 'search', { params: {
      part: 'snippet', q: keySearch, key: this.key,
      maxResults: maxResults,
      type: 'video',
      order: order
    }});
  }

  getVideoById(id: string) {
    return this.http.get(this.url + 'videos', { params: {
      part: 'snippet,statistics',
      id: id,
      key: this.key
    }});
  }

  getRelatedToVideo(id: string, maxResults: string) {
    return this.http.get(this.url + 'search', { params: {
      part: 'snippet',
      relatedToVideoId: id,
      type: 'video',
      key: this.key,
      maxResults: maxResults
    }});
  }

  getComment(id: string, maxResults: string) {
    return this.http.get(this.url + 'commentThreads', { params: {
      key: this.key,
      textFormat: 'plainText',
      part: 'snippet',
      videoId: id,
      maxResults: maxResults
    }});
  }
}
