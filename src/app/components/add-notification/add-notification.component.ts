import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusTaskService } from 'src/app/services/status-taks.service';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent implements OnInit, OnDestroy{

  public _message$= this._statusTaskService.addTask$;
  private _count:number=3;

  private _subcription!:Subscription;

  constructor(
    private _statusTaskService:StatusTaskService
  ) { }

  ngOnInit(): void {

    this.runFuntion();

  }
  ngOnDestroy(): void {
   this._subcription.unsubscribe();
  }

  public runFuntion()
  {
    this._subcription = interval(1000).pipe(take(1)).subscribe(
      ()=>{
          this._statusTaskService.addTask({id:this._count,title:`Tarea ${this._count}`,status:true});
          this._count++;
      }
    );
  }
}




