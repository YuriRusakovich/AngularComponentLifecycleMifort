import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  skills = [];
  skillName;
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

  addSkillItem() {
    if (this.skillName !== '') {
      this.skills.push(this.skillName);
    }
  }
}
