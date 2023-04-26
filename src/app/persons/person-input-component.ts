import { Component, OnInit} from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
  selector: "app-person-input",
  templateUrl: "./persons-input.component.html",
  styleUrls: ["./persons-input.component.css"]
})

export class PersonInputComponent implements OnInit{

  private personsService: PersonsService;

  constructor(service: PersonsService) {
    this.personsService = service;
  }

  ngOnInit(): void {

  }

  enteredPersonName: string = "";

  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName)
    this.enteredPersonName = ''
  }
}
