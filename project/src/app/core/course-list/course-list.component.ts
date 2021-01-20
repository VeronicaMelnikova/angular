import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public items: string[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      'item 1', 'item 2', 'item 3'
    ];
  }

}
