import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  Login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('تم الدخول');
      },
      (error) => {
        console.log('فشل في الدخول');
      }
    );
  }
  LogedIn(){
    const token = localStorage.getItem('token');
    return !! token
  }
  LogedOut(){
    localStorage.removeItem('token');
    console.log('تم الخروج');
  }
}
