import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-system',
  imports: [],
  templateUrl: './grade-system.component.html',
  styleUrl: './grade-system.component.css'
})
export class GradeSystemComponent implements OnInit {
student = {
    name: 'rasel',
    marks: 80,
    grade: '',
    status: ''
  }
  ngOnInit(): void {
      this.student.grade = this.getGrade();
      this.student.status = this.getStatus();
  }
  getGrade(): string {
    if (this.student.marks >= 80) {
      return 'A+';
    } else if (this.student.marks >= 70) {
      return 'A-';
    } else if (this.student.marks >= 60) {
      return 'A';
    } else if (this.student.marks >= 50) {
      return 'B';
    } else {
      return 'F';
    }
  }
  getStatus(): string {
    return this.student.marks >= 50 ? 'Pass' : 'Fail';
  }
}
