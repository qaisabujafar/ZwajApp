import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify:AlertifyService,private router:Router) {}

  ngOnInit() {}

  Login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('تم الدخول');
      },
      (error) => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }
  LogedIn(){
    return this.authService.loggedIn();
  }
  LogedOut(){
    this.authService.logout();
    this.alertify.success('تم الخروج');
    this.router.navigate(['/home']);
  }
} 
