import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  students = [
    {id: 101, name: "Ram", discription: "Ram Details", email: "Ram@xyz.com"},
    {id: 102, name: "Shyam", discription: "Shyam Details", email: "Shyam@xyz.com"},
    {id: 103, name: "Abram", discription: "Abram Details", email: "Abram@xyz.com"},
    {id: 104, name: "Dharam", discription: "Dharam Details", email: "Dharam@xyz.com"}
  ]
  constructor() { }

  /**
   * name
   */
  public getStudents(): Array<{id: any, name: any, discription: any, email: any}> {
    return this.students
  }
  
  public createStudent(students: {id: any, name: any, discription: any, email: any}) {
    this.students.push(students);
  }
}
