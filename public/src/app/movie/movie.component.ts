import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie={
    title:'',
    year: '',
    summery: ''
  }

  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.getOneMovie(data.id)
      console.log(this.movie)
    });
  }
  getOneMovie(id){
    const observable = this.http.getOnemovie(id)
    observable.subscribe((data:any)=>{
      console.log(data);
      this.movie = data;
    })

  };
  deleteOneMovie(id:any){
    const observable = this.http.deleteMovie(id);
    observable.subscribe((data:any)=>{
     console.log("Deleted"+data);
     this.http.getAllMovies();
     this.router.navigate(['/']);
    })
  };
};
