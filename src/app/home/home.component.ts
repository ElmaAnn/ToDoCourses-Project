import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemCounter: number = 0;

  projects: Array<string> = [];
  projectText: string = 'Angular Project';

  constructor() {}

  ngOnInit() {
    //this.itemCounter = this.projects.length;
  }

  addProject() {
    this.projects.push(this.projectText);
    this.projectText = '';
    this.itemCounter = this.projects.length;
  }

  removeProject(i) {
    //this.projects.pop();
    this.projects.splice(i, 1);
    this.projectText = '';
    this.itemCounter = this.projects.length;
  }
}
