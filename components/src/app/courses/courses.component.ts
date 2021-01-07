import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses', // a css selector to reference this component. This will be like extending basic HTML
  templateUrl: './courses.component.html', // The HTML markup to render when invoking this component
  styleUrls: ['./courses.component.css'] // The css style sheet
})
export class CoursesComponent implements OnInit {

  title = 'List of courses';
  courses;

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
