import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  // constructor() { }

  private response:Response
  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
  }
  
  onNewprojects(value) {
    console.log(value);

    this.dataService.pmethod(value)
  .subscribe( responseData => this.router.navigate(['project'])
  );
  }

  
  

}
