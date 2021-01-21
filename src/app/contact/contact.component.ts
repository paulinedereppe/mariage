import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('fform') feedbackDirective:any;
  //variables
  showForm!:boolean;
  feedbackForm!: FormGroup;
  feedback!:Feedback;
  errMess!:string;
  //validations form
  formErrors ={
    'firstname':'',
    'lastname':'',
    'telnum':'',
    'email':'',
    'message':''
  };

  validationMessages = {
    'firstname':{
      'required' : 'Champs obligatoire',
      'minlength': '2 caractères minimum requis'
    },
    'lastname':{
      'required' : 'Champs obligatoire',
      'minlength': '2 caractères minimum requis'
    },
    'telnum':{
      'required' : 'Champs obligatoire'
    },
    'email':{
      'required' : 'Champs obligatoire'
    },
    'message':{
      'required' : 'Champs obligatoire',
      'minlength': '2 caractères minimum requis'

    }  
}

  constructor(private fb:FormBuilder, 
    private feedbackService:FeedbackService,
    private route: ActivatedRoute) {
      this.createFrom();
     }

  ngOnInit(): void {
  }
  //createForm
  createFrom():void{
    this.feedbackForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(2)]],
      lastname:['',[Validators.required,Validators.minLength(2)]],
      telnum:['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      email:['',[Validators.required, Validators.email]],
      message:['',[Validators.required,Validators.minLength(2)]],
      sujet:''

    });
    this.feedbackForm.valueChanges
    .subscribe(date => this.onValueChanged(date));
    this.onValueChanged(); //reste les messages de validation
  }
  //onValueChanged
  onValueChanged(data?:any){
    if(!this.feedbackForm){return ;}
    for( const field in this.formErrors){
      this.formErrors[field]='';
      const control=this.feedbackForm.get(field);
      if(control && control.dirty && !control.valid){
        const msg=this.validationMessages[field];
        for(const key in control.errors){
          this.formErrors[field] +=msg[key]+'';
        }

      }
    }
  }
  //onSubmit
  onSubmit(){
    this.feedback=this.feedbackForm.value;
    this.feedbackService.submitFeedBack(this.feedback).subscribe(feedback =>{
      this.feedback=feedback;
    },
    errMess=> this.errMess=<any>errMess);
    console.log(this.feedback);
    this.feedbackDirective.resetForm();
    setTimeout(()=>this.ngOnInit(),10000);
  }
}
