import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentValue!: FormGroup; 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.studentValue=this.formBuilder.group({
      name:[''],
      class:[''],
      email:[''],
      mobile:['']
    })
  }
  AddStudent(){
    
  }

}
