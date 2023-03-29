import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  isFirstModalTransparent = false;
  secondModalRef:any;
  secondModalId:any;
  constructor(private modalService: NgbModal) { }


  private _numbers:number [] =[8,1,10,7,8,11,4,4,6,5];
  public _numbersTwon:any[]=[];
  ngOnInit(): void {

    this._numbersTwon = [...new Set(this._numbers)].map(x=> `id=${x}`)
    const arrayDt = [...new Set(this._numbers)];
    console.log(arrayDt);
    console.log(this._numbersTwon.join('&'));

  }

  openFirstModal(content:any) {
    this.modalService.open(content, {size:'xl'});
  }

  closeFirstModal() {
    this.modalService.dismissAll();
  }

  openSecondModal(content:any) {
    this.isFirstModalTransparent = true;
    this.secondModalRef = this.modalService.open(content, { backdrop: 'static' });
    this.secondModalId = this.secondModalRef.id;

  }

  closeSecondModal() {
    this.isFirstModalTransparent = false;
    this.secondModalRef.close();
  }
}

