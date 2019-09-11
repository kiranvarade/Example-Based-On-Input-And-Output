import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output()  private send_no = new EventEmitter<number>();
private random_no;
@Input() nm;
constructor() { }

  ngOnInit() {
  }
 public  generateNumber(){
    this.random_no=Math.random();
    this.send_no.emit(this.random_no);
  }
}
