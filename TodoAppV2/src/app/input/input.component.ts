import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  todo = '';
  @Output()
  addTodo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickAddTodo() {
    if (this.todo === '') {
      alert('Enter Todo!!!');
    } else {
      this.addTodo.emit(this.todo);
      this.todo = '';
    }
  }
}
