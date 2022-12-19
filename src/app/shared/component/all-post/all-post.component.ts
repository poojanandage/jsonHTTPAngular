import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipost } from '../../model/data.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {
  postArr : Ipost[] = [];
  errorMsg : string = '';
  postUserId : number = 1;

  constructor(private postService : PostService) { }

  ngOnInit(): void {
   this.getAllpost()
  }

  getAllpost(){
    this.postService.fetchAllPost()
            .subscribe((res) =>{
              console.log(res);
              this.postArr = res
            },
            (err) => {
              this.errorMsg = err.message
              console.log(this.errorMsg);
              
            })    
          }


  onDeletePost(id : number){
    this.postService.getDeletePost(id)
              .subscribe((res) => {
                console.log(res);
                this.postArr = this.postArr.filter(post => post.id !== id)
                
              })
  }


  }
