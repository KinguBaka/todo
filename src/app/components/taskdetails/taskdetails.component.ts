import { Component } from '@angular/core';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {
  taskDetails:Array<any>;

  constructor() {
    this.taskDetails = [];
  }
}
