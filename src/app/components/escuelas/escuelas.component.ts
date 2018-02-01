import { Component, OnInit } from '@angular/core';

// services
import { School } from '../../models/School';
import { SchoolsService } from '../../services/schools.service';


@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.component.html',
  styleUrls: ['./escuelas.component.css']
})
export class EscuelasComponent implements OnInit {
  // creo un apropiedad donde se almacenaran las escuelas
  schools: School[];
  editState: boolean = false;
  newState: boolean = false;
  schoolToEdit: School;

  constructor( public shoolService: SchoolsService ) { }

  ngOnInit() {

    this.shoolService.getSchools().subscribe(school => {
      //console.log(school);
      this.schools = school;
    });
    this.newState = false;
  }

  deleteSchool(event, school) {
    event.preventDefault();
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.shoolService.deleteSchool(school);
    }
    return;
  }

  editSchool(event, school) {
    event.preventDefault();
    this.editState = !this.editState;
    this.schoolToEdit = school;
  }

  crearSchool(event, school){
    event.preventDefault();
    this.newState = !this.newState;
  }

  updateSchool(school) {
    event.preventDefault();
    this.shoolService.updateSchool(school);
    this.schoolToEdit = null;
    this.editState = false;
  }

  regresar(){

  }

}
