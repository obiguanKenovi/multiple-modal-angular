import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class StatusTaskService {
  public listTask: ITask[] = [
    { id: 1, title: 'Tarea uno', status: false },
    { id: 2, title: 'Tarea dos', status: true },
  ];

  private taskBehaviorSubject = new BehaviorSubject<ITask[]>(this.listTask);

  public listTask$ = this.taskBehaviorSubject.asObservable();

  private addTaskSubject = new Subject<ITask>();
  public addTask$ = this.addTaskSubject.asObservable();

  public addTask(task: ITask) {
    this.listTask.push(task);
    this.taskBehaviorSubject.next(this.listTask);
    this.addTaskSubject.next(task);
  }

  public removeTask(id: number) {
    this.listTask = this.listTask.filter((x) => x.id !== id);
    this.taskBehaviorSubject.next(this.listTask);
  }

  public changeStatusTask(id: number) {
    let task = this.listTask.find((x) => x.id === id);
    if (task) {
      task.status = !task.status;
      this.addTaskSubject.next(task);
      this.taskBehaviorSubject.next(this.listTask);
    }
  }
}
