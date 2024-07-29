import { Component } from '@angular/core';
import { ListComponent } from "../../ui/list/list.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

}
