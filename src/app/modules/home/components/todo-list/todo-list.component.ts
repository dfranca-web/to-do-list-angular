import { Component, DoCheck } from '@angular/core'
import { TaskList } from '../../model/task-list'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = this.getLocalStorage()

  ngDoCheck(): void {
    this.sortList(this.taskList)
    this.setLocalStorage(this.taskList)
  }

  public removeTask(index: number) {
    this.taskList.splice(index, 1)
  }

  public hasTask(): boolean {
    return !!this.taskList.length
  }

  public addTask(task: string): void {
    this.taskList.push({ task, completed: false })
  }

  public removeAllTasks(): void {
    const confirm = window.confirm('Tem certeza que deseja limpar?')
    confirm && (this.taskList = [])
  }

  public validationTask(task: string, index: number): void {
    let confirm
    !task.length && (confirm = window.confirm('Task sem descrição, deseja remover?'))
    confirm && this.removeTask(index)
  }

  public sortList(taskList: Array<TaskList>): void {
    taskList.sort((first, last) => Number(first.completed) - Number(last.completed))
  }

  public setLocalStorage(taskList: Array<TaskList>): void {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }

  public getLocalStorage(): Array<TaskList> {
    return JSON.parse(localStorage.getItem('taskList') || '[]')
  }
}
