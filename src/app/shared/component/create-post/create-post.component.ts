import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ipost } from '../../model/data.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  allpostForm : FormGroup = {} as FormGroup;
  newPostArr : Ipost[] = [];
  submitBtnFlag : boolean = true;
  constructor(private fb : FormBuilder,
              private postService : PostService,
              private router : Router) { }

  ngOnInit(): void {
    this.createAllControl()
    this. ongetAllPost()
    
  }

  createAllControl(){
    this.allpostForm = this.fb.group({
      title : [null,Validators.required],
      body : [null,Validators.required],
    })
  }

  ongetAllPost(){
    this.postService.fetchAllPost()
            .subscribe(res =>{
              console.log(res)
              this.newPostArr = res
              
            })
  }

  onSubmitForm(){
    console.log(this.allpostForm.value);
    let userId = Math.floor(Math.random() * 10)
    console.log(userId);
    
    let obj = {
      userId : userId,
      ...this.allpostForm.value
    }
    console.log(obj)
   
    this.postService.getcreatePost(obj)
                .subscribe((res) =>{
                  console.log(res);
                  this.newPostArr.push(res)
                  
                })
                this.allpostForm.reset()
                this.router.navigate(['home'])

  }

 


}
