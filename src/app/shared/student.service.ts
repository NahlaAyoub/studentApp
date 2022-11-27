import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { map } from 'rxjs/operators';


@Injectable()
export class StudentService {
  selectedStudent: Student | any;
  students: Student[] | any;
  baseURL = 'http://localhost:5450/students';
  constructor(private http: HttpClient) { }
  postStudent(stu: Student) {
    return this.http.post(this.baseURL, stu);
  }

  getStudentList() {
    return this.http.get(this.baseURL);
  }

  putStudent(stu: Student) {
    return this.http.put(this.baseURL + `/${stu._id}`, stu);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
