import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit, DoCheck {
  @Input() counters: number[];
  total: number;

  constructor() {}

  ngOnInit() {

  }

  ngDoCheck() {
    this.total = this.calculateTotal(this.counters);
  }

  private calculateTotal(numbers: number[]): number {
    return numbers.reduce((sum, num) => (sum += num), 0);
  }
}
