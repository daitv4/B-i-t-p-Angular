import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  arrTodo = [];

  @Output()
  changeTodo = new EventEmitter();
  @Output()
  deleteTd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeStatus(item) {
    this.changeTodo.emit(item);
  }

  deleteTodo(item) {
    this.deleteTd.emit(item);
  }

}
