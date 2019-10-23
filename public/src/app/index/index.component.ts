import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  movies: any = []

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(){
    const observable = this.http.getAllMovies();
    observable.subscribe((data:any)=>{
      this.movies = data;
      console.log(data)
    })

  }

}
