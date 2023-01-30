import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public add = new EventEmitter()

  public taskDescription = ''

  public addTask(): void {
    this.taskDescription = this.taskDescription.trim()

    if (this.taskDescription) {
      this.add.emit(this.taskDescription)
      this.taskDescription = ''
    }
  }
}
