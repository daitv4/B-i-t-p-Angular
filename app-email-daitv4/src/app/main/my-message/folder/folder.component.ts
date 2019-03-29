import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  public messages: Message[];
  public selectedItem: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    return this.activatedRoute.params.subscribe(param => {
      this.messages = this.messageService.getMessageByFolder(param.folder);
    });
  }

  selectItem(id: string) {
    this.selectedItem = id;
  }
}
