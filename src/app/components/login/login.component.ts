import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { PermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  permissions: string;
  constructor(private authService: AuthService,
          private router: Router,
          private flashMessageService: FlashMessagesService,
          private validateService: ValidateService,
          private permissionsService: PermissionsService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }


    // Validate Fields
    if (!this.validateService.validateLogin(user)) {
      this.flashMessageService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 5000});    
      this.router.navigate(['login']);  
    } else {
      this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['admin-dashboard']);
        } else {
          this.flashMessageService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
    }
  }
}
