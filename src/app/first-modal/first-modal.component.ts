import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.css']
})
export class FirstModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() openSecond = new EventEmitter<void>();

  @Input() isTransparent!:boolean;
}
