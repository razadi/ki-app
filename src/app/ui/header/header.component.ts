import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../services/info.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public _is: InfoService,
               public router: Router ) { }

  ngOnInit() {

  }



}
