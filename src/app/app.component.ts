import { Component } from '@angular/core';

/*services*/
import { InfoService } from "./services/info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor( public _is: InfoService ){
    this.title = _is.info.titulo;
  }

}
