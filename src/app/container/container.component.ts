import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  skills = ['skill1', 'skill2', 'skill3'];

  name;
  counters = [];

  constructor() { }

  ngOnInit() {
  }

  onInputName(name) {
    this.name = name;
  }

  onCounterChanged(counter, id) {
    this.counters[id] = counter;
  }
}
