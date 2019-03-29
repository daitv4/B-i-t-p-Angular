import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {
  public folders: string[] = ['inbox', 'finance', 'travel', 'personal', 'span', 'drafts', 'sent'];
  public selectedFolder: string = 'inbox';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSelect(folder) {
    this.selectedFolder = folder;
    this.router.navigateByUrl('/email/mymessage/' + folder);
  }
  
}
