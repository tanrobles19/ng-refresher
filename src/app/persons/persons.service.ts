import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";

@Injectable({ providedIn: 'root'})
export class PersonsService {
  //Observable
  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) {

  }

  fetchPersons() {
    this.http
    .get<any>('https://swapi.dev/api/people')
    .pipe(
      map(resData => {
        return resData.results.map((character: { name: any; }) => character.name);
      })
    )
    .subscribe( transformedData => {
      this.personsChanged.next(transformedData)
      // console.log(transformedData);

    })
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter( person => {
      return person !== name;
    })
    this.personsChanged.next(this.persons);
  }

}
