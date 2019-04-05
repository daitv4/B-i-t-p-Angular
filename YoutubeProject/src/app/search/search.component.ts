import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keySearch;
  public maxResult = 15;
  public width = window.innerWidth / 1.5;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.width = window.innerWidth / 1.5;
    }

  onClick(keySearch) {
    this.keySearch = keySearch;
    this.router.navigateByUrl('/youtube/search/' + keySearch);
  }

  homeClick() {
    this.router.navigateByUrl('/');
  }
}
