import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.css']
})
export class SecondModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();


  ngOnInit(): void {
  }

}

