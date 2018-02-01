import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';

// importo el modelo
import { School } from '../models/School';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SchoolsService {
  //
  schoolsCollection: AngularFirestoreCollection<School>
  schools: Observable<School[]>;
  schoolDoc: AngularFirestoreDocument<School>;

  constructor( public angularfs: AngularFirestore ) {
    this.schoolsCollection = angularfs.collection<School>('schools'); //nombre la base de datos
    //
    this.schools = this.schoolsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as School;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  //
  getSchools(){
    //console.log(this.schoolsCollection);
    return this.schools;
  }

  addSchool(school: School){
    // console.log(this.schoolsCollection);
    // console.log(school);
    this.schoolsCollection.add(school);
  }

  deleteSchool(school: School){
    this.schoolDoc = this.angularfs.doc(`schools/${school.id}`);
    this.schoolDoc.delete();
  }

  updateSchool(school: School){
    this.schoolDoc = this.angularfs.doc(`schools/${school.id}`);
    this.schoolDoc.update(school);
  }

}
