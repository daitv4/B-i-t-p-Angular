import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  itemTodo;

  @Output()
  changeStatus = new EventEmitter();

  @Output()
  deleteTodo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnChangeStatus() {
    this.changeStatus.emit(this.itemTodo);
  }

  btnDeleteTodo() {
    this.deleteTodo.emit(this.itemTodo);
  }
}
