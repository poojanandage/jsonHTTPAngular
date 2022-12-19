import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ipost } from '../../model/data.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-uppost',
  templateUrl: './uppost.component.html',
  styleUrls: ['./uppost.component.scss']
})
export class UppostComponent implements OnInit {
  newPostArr : Ipost[] =[];
  submitBtnFlag : boolean = true;
  updatepostForm : FormGroup = {} as FormGroup;
  constructor(private postService : PostService, 
              private route : ActivatedRoute,
              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.PostFormControl()

   this.route.params
          .subscribe((params : Params)=>{
            console.log(params);
            let id = params['id']
                this.postService.getSinglePost(id)
                          .subscribe((res)=>{
                            console.log(res);
                            localStorage.setItem('postId', ''+res.id)
                            this.updatepostForm.setValue({
                              title : res.title,
                              body : res.body
                            })
                            console.log(this.updatepostForm.setValue);
                            
                            
                          })
          })

        }
        PostFormControl(){
            this.updatepostForm = this.fb.group({
              title : ['', Validators.required],
              body : ['', Validators.required]
            })
        }
        onupDateForm(){
          console.log(this.updatepostForm.value);
          let id = +(localStorage.getItem('postId')!)
          this.postService.getUpdatePost(id,this.updatepostForm.value)
                    .subscribe((res) =>{
                      console.log(res);
                      this.newPostArr.push(res)
                      
                    })
                    this.router.navigate(['/home'])

        }

        


  }


