import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() filteredTasks: { name: string, completed: boolean }[] = [];
  @Output() taskChanged = new EventEmitter<{ name: string, completed: boolean }>();

  onTaskChange(task: { name: string, completed: boolean }) {
    task.completed = !task.completed;
    this.taskChanged.emit(task);
  }
}
