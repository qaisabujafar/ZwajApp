import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm!:NgForm
  user!: User;

  constructor(private route: ActivatedRoute, private alertify:AlertifyService
    ,private authService:AuthService,private userSerivce:UserService) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });
  }

  updateUser(){
    this.editForm.reset(this.user);
    this.userSerivce.updateUser(this.authService.decodedToken.nameid,this.user).subscribe(()=>
    {    this.alertify.success('نم نعديل الملف الشخصي بنجاح');
      this.editForm.reset(this.user);
    },error=>this.alertify.error(error));
    
  }
}
