import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  movie={
    title:'',
    year: '',
    summery:''
  }
  errors;

  constructor(
              private route: ActivatedRoute,
              private http: HttpService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.getOnebyID(data.id)
    })
  }
  getOnebyID(id){
    const observable = this.http.updateMovie(id, this.movie);
    observable.subscribe((data:any)=>{
      console.log(data);
      this.movie = data
      }
    )
  }
  buttonSubmit(id){
    console.log(this.movie)
    const observable = this.http.updateMovie(id, this.movie);
    observable.subscribe((data:any)=>{
      if(data.message==='fail'){
        this.errors = data.error['message'];
      }else{
        console.log("edit made");
        this.router.navigate(['/'])
    }
  })
}

}
