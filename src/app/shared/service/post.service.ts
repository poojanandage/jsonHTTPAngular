import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
basePostUrl = `${environment.basePostUrl}`

  constructor(private http : HttpClient) { }

  fetchAllPost() : Observable<Ipost[]>{
    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'JWT Token'
    })
    return this.http.get<Ipost[]>(this.basePostUrl, {
      headers : httpHeaders
    })
    
  }
  getcreatePost(post : Ipost) : Observable<Ipost>{
    return this.http.post<Ipost>(this.basePostUrl,post)
  }
  getSinglePost( id : string) : Observable<Ipost>{
    let singleUrl = `${this.basePostUrl}/${id}`
    return this.http.get<Ipost>(singleUrl)
  }
  getEditPost(id : number) : Observable<Ipost>{
    let editUrl = `${this.basePostUrl}/${id}`
    return this.http.get<Ipost>(this.basePostUrl)
  }

  getUpdatePost(id: number,obj : Ipost):Observable<Ipost>{
    let upDateUrl = `${this.basePostUrl}/${id}`
    return this.http.patch<Ipost>(upDateUrl, obj);
  }

  getDeletePost(id : number) : Observable<Ipost>{
    let deleteurl = `${this.basePostUrl}/${id}`
    return this.http.delete<Ipost>(deleteurl)
  }

 
}
