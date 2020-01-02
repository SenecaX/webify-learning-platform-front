import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCoursesList().subscribe( courses => { console.log('courses', courses);})
  }

}
