import { Component, OnInit } from '@angular/core';

// services
import { School } from '../../../models/School';
import { SchoolsService } from '../../../services/schools.service';

@Component({
  selector: 'app-add-escuela',
  templateUrl: './add-escuela.component.html',
  styleUrls: ['./add-escuela.component.css']
})
export class AddEscuelaComponent implements OnInit {
  newState: boolean = false;
  newSchool: School = { profesor: '',
                        agrupacion: '',
                        corto: '',
                        direccion: '',
                        telefono: '',
                        whatsapp: '',
                        facebook: '',
                        mail: '',
                        contacto: '' };

  constructor( public shoolService: SchoolsService ) { }

  ngOnInit() {
  }

  onSubmit() {
     // console.log(this.newSchool);
    if(this.newSchool.agrupacion != '' && this.newSchool.profesor != '') {
      this.shoolService.addSchool(this.newSchool);
      this.newSchool.agrupacion = '';
      this.newSchool.profesor = '';
      this.newState = !this.newState;
    }
  }

}
