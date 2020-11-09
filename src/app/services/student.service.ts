import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Martín Alejandro López Báez',
      controlNumber: '16400946',
      active: true
    });
    this.students.push({
      name: 'Jonathan Israel López Sánchez',
      controlNumber: '16400948',
      active: true
    });
    this.students.push({
      name: 'Oscar Enrique Jaime Ramos',
      controlNumber: '16400956',
      active: true
    });
    this.students.push({
      name: 'Irving Daniel Díaz Jímenez',
      controlNumber: '16400966',
      active: false
    });
  }
  getStudents(): Student[] {
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }
}
