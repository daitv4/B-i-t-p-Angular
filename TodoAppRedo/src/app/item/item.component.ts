import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

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
