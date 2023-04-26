import { Component, OnDestroy, OnInit } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-person',
  templateUrl: './persons.component.html'

})

export class PersonsComponents implements OnInit, OnDestroy{

  personList: string[] = [];
  private personService: PersonsService;
  private personListSubs: Subscription = new Subscription;

  isFetching = false;

  constructor(service: PersonsService) {
    this.personService = service;
  }
  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }
  ngOnInit(): void {

    this.personService.fetchPersons();

    this.personList = this.personService.persons;
    this.personListSubs = this.personService.personsChanged.subscribe( persons => {
      this.personList = persons;
      this.isFetching = false;
    } );
    this.isFetching = true;
    this.personService.fetchPersons();

  }

  onRemovePerson(personeName: string) {
    // this.personListSubs.unsubscribe();
    this.personService.removePerson(personeName);
  }

}
