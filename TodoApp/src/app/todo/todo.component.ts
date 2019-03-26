import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public listTodo: any[] = [];
  public todo: string;
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    if (this.todo.trim() === '') {
      alert('Enter Todo!!!');
    } else {
      this.listTodo.push({
        id: this.listTodo.length + 1,
        name: this.todo,
        status: false
      });
    }

    this.todo = '';
  }

  deleteTodo(item) {
    this.listTodo.splice(this.listTodo.indexOf(item), 1);
  }

  changeStatus(item) {
    this.listTodo[this.listTodo.indexOf(item)].status = !this.listTodo[this.listTodo.indexOf(item)].status;
  }
}
