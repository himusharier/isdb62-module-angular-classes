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
  isEditing: boolean = false;

  constructor(private teacherApiService: TeacherApiService) {}

  localApiData: String = '';

  ngOnInit(): void {
    this.fetchTeachers();
    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }

    
    this.teacherApiService.callLocalApi().subscribe(data => {
      this.localApiData = data;
    });
  }

  fetchTeachers() {
    this.teacherApiService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
      }
    )
  }

  openModal(teacher?: Teacher) {
    if (teacher) {
      this.newTeacher = { ...teacher };
      this.isEditing = true;
    } else {
      /*this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
      this.isEditing = false;*/
      this.resetForm();
    }

    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
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
    this.isEditing = false;
  }

  /*addTeacher() {
    this.teacherApiService.addTeacher(this.newTeacher).subscribe(
      (response) => {
        this.teachers.push(response);
        // this.modal?.hide();
        window.location.reload();
        this.resetForm();
      },
      (error) => {
        console.error('error adding teacher: ', error);
      }
    )
  }*/

  saveTeacher() {
    if (this.newTeacher) {
      if (this.isEditing) {
        this.teacherApiService.updateTeacher(this.newTeacher).subscribe(
          (response) => {
            const index = this.teachers.findIndex(t => t.id === response.id);
            if (index !== -1) {
              this.teachers[index] = response;
            }
            this.modal?.hide();
          },
          (error) => {
            console.error('error updating teacher: ', error);
          }
        );
      } else {
        this.teacherApiService.addTeacher(this.newTeacher).subscribe(
          (response) => {
            this.teachers.push(response);
            // this.modal?.hide();
            window.location.reload();
            this.resetForm();
          },
          (error) => {
            console.error('error adding teacher: ', error);
          }
        );
      }
    }
  }

  deleteTeacher(id: number) {
    this.teacherApiService.deleteTeacher(id).subscribe(
      () => {
        this.teachers = this.teachers.filter(t => t.id !== id);
        //window.location.reload();
      },
      (error) => {
        console.log('error deleting teacher: ', error);
      }
    )
  }

}
