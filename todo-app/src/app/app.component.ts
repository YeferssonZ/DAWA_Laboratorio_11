import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filteredTasks: { name: string, completed: boolean }[] = [];
  selectedFilter: string = 'all';

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
    this.filterTasks(this.selectedFilter); // para el agregado
  }

  filterTasks(selectedFilter: string) {
    this.selectedFilter = selectedFilter;
    if (selectedFilter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (selectedFilter === 'not-completed') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    } //para e filtrado
  }
}
