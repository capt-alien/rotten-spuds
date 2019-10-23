import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newMovie={
    title:'',
    year: '',
    summery: ''
  }
  errors;

  constructor(private http: HttpService, 
              private router: Router) { }

    ngOnInit() {}

  createMovie(){
    const observable = this.http.postMovie(this.newMovie);
    console.log("movie created")
    observable.subscribe((data:any)=>{
      console.log(data);
      if(data.message==='fail'){
        this.errors = data.error['message'];
      }else{
        console.log("***SHOULD REDIRECT**")
        this.router.navigate['/']
      };
    })
  }
}
