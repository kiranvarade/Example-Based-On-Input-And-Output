import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public randomNumber: number;

  constructor() { }
 name="Kiran Varade";
  ngOnInit() {
  }
   public onNumberGenerated(no: number) {
    this.randomNumber = no;
  }
}
