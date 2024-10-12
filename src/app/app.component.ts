import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  student = {
    name: '',
    age: null,
    email: '',
    course: ''
  };


  onSubmit(form: any) {

    if (form.valid) {
      console.log('Form Submitted:', this.student);
      alert('Registration Successful!');

      form.reset();
    } 
    else {

      let errorMessages = this.getErrorMessages(form);
      alert('Please correct the following errors:\n' + errorMessages.join('\n'));
    }
  }

  getErrorMessages(form: any): string[] {
    const messages = [];


    if (form.controls.name?.errors) {
      if (form.controls.name.errors.required) {
        messages.push('Name is required.');
      }
      if (form.controls.name.errors.minlength) {
        messages.push('Name must be at least 3 characters long.');
      }
    }


    if (form.controls.age?.errors) {
      if (form.controls.age.errors.required) {
        messages.push('Age is required.');
      }
      if (form.controls.age.errors.min) {
        messages.push('Age must be at least 18.');
      }
      if (form.controls.age.errors.max) {
        messages.push('Age must be less than or equal to 60.');
      }
    }


    if (form.controls.email?.errors) {
      if (form.controls.email.errors.required) {
        messages.push('Email is required.');
      }
      if (form.controls.email.errors.email) {
        messages.push('Invalid email format.');
      }
    }



    if (form.controls.course?.errors) {
      if (form.controls.course.errors.required) {
        messages.push('Course is required.');
      }
    }

    return messages;
  }
}
