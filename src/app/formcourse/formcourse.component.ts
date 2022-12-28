import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcourse',
  templateUrl: './formcourse.component.html',
  styleUrls: ['./formcourse.component.css']
})
export class FormcourseComponent implements OnInit {
  CourseId: any;
  CourseName:any;
  InstituteName:any;
  Address:any;
  CourseDuration:any;
  Course:any
  courses  :any; 
  CourseURL: any;
  updatefunctiononcalled: RequestInit | undefined;
  id: any;

  
constructor() { }

  ngOnInit(): void {
    
}
toggleCourse(){
  this.Course=!this.Course
}

/* target in place edit
1.how to change element or text based on conditions*/
isHidden=false;
/* a function to handle edit action*/
editDoc(){ 
  
  if(this.isHidden){
    this.isHidden=false;
    fetch("http://localhost:5000/course/updateCourseDetails/" +this.CourseId,{
method:'PUT',
headers:{
"Access-Control-Allow-Origin":"*",
"Content-Type":'application/json'
},
body:JSON.stringify(this.CourseName,)

})  .then(response => response.json())
.then(result =>
console.log(result))
.catch(error => console.log('error',error));
}
   else{
    this.isHidden=true;
  }
}
/* function for updating data */
updateCourseData(data:any){
  //first lets get the updated information here
  
  console.log(data)
  
  
  // make a api call for update
}






// *****adding post function using api fetch call Post details:******
onSubmit(){
  //firt thing  we got the variables 
  console.log('isbuttonclicked')
  console.log(this.CourseName)
  console.log(this.CourseId)
  console.log(this.InstituteName)
  console.log(this.Address)
  console.log(this.CourseDuration)
  console.log(this.CourseURL)
  
      const Obj = {
      Course:this.Course,
        CourseName: this.CourseName,
        CourseId: this.CourseId,
        InstituteName: this.InstituteName,
        Address: this.Address,
        CourseDuration: this.CourseDuration,
        CourseURL:this.CourseURL,
     }
  //now send http request
var requestOptions = {
method: 'POST',
body:JSON.stringify(Obj)
};

console.log(requestOptions);

fetch("http://localhost:5000/course/fillCourseDetails",{
method:'POST',
headers:{
"Access-Control-Allow-Origin":"*",
"Content-Type":'application/json'
},
body:JSON.stringify(Obj)

})  .then(response => response.json())
.then(result =>
console.log(result))
.catch(error => console.log('error',error));
alert("submitted sucessfully");
}
  




// ****here adding get api fetch call *****
getCourse(){
  fetch("http://localhost:5000/course/getCoursesDetails" ,{
      method: 'GET' ,
      headers:{
        "access-Control-Allow-Origin":"*" ,

      },
    })
    .then(response => response.json())
    .then(result => {
      console.log(result),
      this.courses = result.CoursesInfo
      console.log(this.courses)
    }
    ).catch(err =>
      console.log(err))
  }
  
  
  
  
  /***** here adding delete fetch api call*****/
  deleteCourse (){
    fetch("http://localhost:5000/course/deleteCourse/" +this.CourseId,{
        method: 'DELETE' ,
        headers:{
          "access-Control-Allow-Origin":"*" ,
  
        },
      })
      .then(response => response.json())
      .then(result => {
        console.log(result),
        this.getCourse()
      }
      ).catch(err =>
        console.log(err))
    }
  

}

function updateCourseData(CourseName: any, any: any) {
  throw new Error('Function not implemented.');
}


function getCourse() {
  throw new Error('Function not implemented.');
}


function deleteCourse(id: any, any: any) {
  throw new Error('Function not implemented.');
}
