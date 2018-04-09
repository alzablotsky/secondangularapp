import { Component, OnInit } from '@angular/core';
import {Person} from './../../person'

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {
    
    public p : Person;


  constructor() { 

    this.p = new Person (1, "incognito")
  }

  ngOnInit() {   
  }

}
