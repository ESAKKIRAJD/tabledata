import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects=[];

  // constructor() { }

  private response:Response
  constructor(private dataService:DataService, private router: Router) {
    this.Init();
    }

  
    Init() {

this.dataService.getProjects()
.subscribe(res => {
this.projects = res;
this.router.navigate(['/project']);
});
}

  


  ngOnInit() {
  }
  

}
