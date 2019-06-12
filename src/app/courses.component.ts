import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>`
    // Pipes examples
    // {{ course.title | uppercase }}<br />
    // {{ course.students | number}}<br />
    // {{ course.rating | number:'1.2-2' }}<br />
    // {{ course.price | currency:'USD':true }}<br />
    // {{ course.releaseDate | date:'shortDate' }}
    
    // Two-way Binding: <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()"/>`
    // Template variables: <input #email (keyup.enter)="onKeyUp(email.value)" />`
    // Looking for enter to be edited: <input (keyup.enter)="onKeyUp($event)" />`
    // Event handling basic: <button (click)="onSave($event)">Save</button>`
    // Style Binding: <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>`
    // Class Binding: <button class="btn btn-primary" [class.active]="isActive">Save</button>`
})

export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = true;
  email="me@example.com";

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30254,
    price: 190.95,
    releaseDate: new Date(2019, 6, 11)
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  // Event binding basic
  // onSave($event) {
  //   console.log("button was clicked", $event);
  // }

  // Looking for enter to be edited: 
  // onKeyUp($event){
  //   console.log($event.target.value);
  // }

  // Template variables: 
  // onKeyUp(email){
  //   console.log(email);
  // }
  // Two-way binding
  onKeyUp(){
    console.log(this.email);
  }
} 