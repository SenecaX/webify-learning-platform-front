import { Injectable } from '@angular/core';
import {  } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Course } from '../model/backend.model';

@Injectable()
export class CoursesService {

    private coursesUrl = "/courses"
    headers: any;
    accessToken = localStorage.getItem('access_token');
    httpOptions = {
        headers: this.headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + this.accessToken)
    };
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient) {
    }

    public getCoursesList(): Observable<Course> {
        return this.http.get<Course>(this.coursesUrl);
    }




}