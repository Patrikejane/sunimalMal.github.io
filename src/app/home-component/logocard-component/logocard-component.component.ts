import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logocard-component',
  templateUrl: './logocard-component.component.html',
  styleUrls: ['./logocard-component.component.css']
})
export class LogocardComponentComponent implements OnInit {

  @Input()
  imageUrl:any;

  @Input()
  alternative:any;

  constructor() { }

  ngOnInit(): void {
  }

}
