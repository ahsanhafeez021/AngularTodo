import { Todo } from './../../Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
  }
  onCheckboxClick(todo) {
    console.log(todo);
    this.todoCheckbox.emit(todo)
    console.log(todo);

  }

  ngOnInit(): void {
  }

}
