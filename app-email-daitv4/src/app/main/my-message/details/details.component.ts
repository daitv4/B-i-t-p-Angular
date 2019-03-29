import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public message: Message;
  constructor(
    private router: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getMessageById();
  }

  getMessageById() {
    return this.router.params.subscribe(x => {
      this.message = this.messageService.getMessageById(x.id);
    });
  }
}
