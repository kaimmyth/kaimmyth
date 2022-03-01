import { Component, OnInit } from '@angular/core';
import { Name } from "../home";
import { HomeServiceService } from '../home-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myname: Name={
    name: 'Edureka!'
  }


  constructor(private homeservice: HomeServiceService) { }

  ngOnInit(): void {
  }

}
