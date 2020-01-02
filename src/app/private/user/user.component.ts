import {Component, OnInit} from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  city$;

  constructor(private appDataService: AppDataService) {
  }

  ngOnInit() {
    this.city$ = this.appDataService.getCities();
  }
}