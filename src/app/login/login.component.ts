import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private s1:DemoService,private router: Router) 
  { }
       user :User = new User();
       showDialog = false;
  dialogMessage = '';
  dialogTitle = '';
  ngOnInit(): void {
  } 
     link:string="";
          logindata()
          {
              this.s1.logindata1(this.user).subscribe( data=>
               { 
               this.dialogTitle = 'Hurray!';
               this.dialogMessage = 'You have successfully logged in.';
               this.showDialog = true; 
              },
               error=>{
                this.dialogTitle = 'Oops!';
                this.dialogMessage = 'Invalid username or password.';
                this.showDialog = true;
               }
              );
            }

            closeDialog() {
              this.showDialog = false;
              if (this.dialogTitle === 'Hurray!') {
                this.router.navigate(['/dashboard']);
            }
          }

        }
