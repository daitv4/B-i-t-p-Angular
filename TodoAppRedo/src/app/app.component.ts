import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoAppRedo';
  public arr = [];

  addTodoParent(input) {
    this.arr.push({
      id: new Date().getTime(),
      name: input,
      status: false
    });
  }

  changeStatus(item) {
    this.arr[this.arr.indexOf(item)].status = !this.arr[this.arr.indexOf(item)].status;
  }

  deleteTodo(item) {
    this.arr.splice(this.arr.indexOf(item), 1);
  }
}
