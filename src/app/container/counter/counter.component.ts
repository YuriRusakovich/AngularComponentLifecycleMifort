import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() skillName;
  @Input() name;
  @Output() counterChanged: EventEmitter<number> = new EventEmitter<number>();

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onInc() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

  onDec() {
    this.counter--;
    this.counterChanged.emit(this.counter);
  }

}
