import { Component, OnInit } from '@angular/core';
import { TeacherApiService } from '../service/teacher-api.service';
import { Teacher } from '../teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-teacher-list',
  imports: [FormsModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[] = [];

  newTeacher: Teacher = {
    id: 0,
    name: '',
    schoolName: '',
    isHeadTeacher: false,
    assignedSubject: '',
    salary: 0,
    joiningDate: new Date(),
    isAggressive: false
  };
  // or,
  // newTeacher = new Teacher(0, '',);

  private modal: bootstrap.Modal | null = null;

  constructor(private teacherApiService: TeacherApiService) {}

  ngOnInit(): void {
    this.fetchTeachers();

    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  fetchTeachers() {
    this.teacherApiService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
      }
    )
  }


  addTeacher() {
    this.teacherApiService.addTeacher(this.newTeacher).subscribe(
      (response) => {
        this.teachers.push(response);
        this.modal?.hide();
        this.resetForm();
      },
      (error) => {
        console.error('error adding teacher: ', error);
      }
    )
  }

  resetForm() {
    this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
    this.newTeacher = {
      id: 0,
      name: '',
      schoolName: '',
      isHeadTeacher: false,
      assignedSubject: '',
      salary: 0,
      joiningDate: new Date(),
      isAggressive: false
    };
  }

}
