import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {

  @Input()
  inputClass: string = 'input'

  @Input()
  inputText: string = ''

  constructor() { }

  ngOnInit() {
  }

}
