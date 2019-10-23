import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
    this.getAllMovies()
  }
    // INDEX
    getAllMovies(){
      return this.http.get('/movies')
    }
    // GET ONE
    getOnemovie(id){
      return this.http.get(`/movies/${id}`)
    }
    // NEW
    postMovie(data){
      return this.http.post('/movies', data)
    }
    // DELETE
    deleteMovie(id){
      return this.http.delete(`/movies/${id}`)
    }
    // EDIT
    updateMovie(id, data){
      return this.http.put(`/movies/${id}`, data)
    }
    // END ROUTES
}
