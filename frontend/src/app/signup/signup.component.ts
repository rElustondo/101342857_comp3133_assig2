import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = "";
  email = "";
  password = "";

  onSubmit() {
    console.log('Submitted!');
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
  }
}
