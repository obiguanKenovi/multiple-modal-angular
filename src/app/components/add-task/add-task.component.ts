import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatusTaskService } from 'src/app/services/status-taks.service';

type NewType = StatusTaskService;

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {

 public listTask$= this._statusTaskService.listTask$;

 private subcription!:Subscription;
  constructor(
    private _statusTaskService:StatusTaskService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {

  }

   public changeStatusTask (id:number)
    {
      this._statusTaskService.changeStatusTask(id);
    }

    public removeTask(id:number)
    {
        this._statusTaskService.removeTask(id);
    }

}
