import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()



export class DataService {

    dashborddetails : any;
   
    private _url:string="http://5b17360ff5c9b700145511e4.mockapi.io/table"

    constructor(private _http:Http){
        
    }

    getProjects() {
        
      return this._http.get(this._url)
      .map((dashborddetails: Response) => dashborddetails.json());
    }
    

    pmethod(value){
        console.log(value)
        return this._http.post(this._url, value)
         .map((response:Response) => response.json().value)
    }

}
