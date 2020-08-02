import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  register(): any {
    this.auth.register(this.model).subscribe(
      () => {
        console.log('registered!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  cancel(): any {
    this.cancelRegister.emit(false);
    console.log('cancel called');
  }
}
