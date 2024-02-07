import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todos } from '../todos';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  todos = Todos;

  changeText(){
    console.log('changeText Todos');
  }

  changeFirstEntry(){
    //this.todos[0].text='Bestellen...';
    this.todos[0]={...this.todos[0], text: 'was anderes...'};
  }
}
