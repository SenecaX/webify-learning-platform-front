import { Injectable } from '@angular/core';
import {  } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppDataService {
    constructor(private http: HttpClient) {
    }

    getCities() {
        //return this.http.get('/springjwt/cities').map(res => res.json());
    }

    getUsers() {
        //return this.http.get('/springjwt/users').map(res => res.json());
    }
}