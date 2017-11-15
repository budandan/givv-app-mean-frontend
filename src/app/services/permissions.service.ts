import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class PermissionsService {
  permissions: string;
  constructor() { }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getPermissions(user) {
    if (user.permissions == 'admin') {
      this.permissions = 'admin';
    } else if (user.permissions == 'employer') {
      this.permissions = 'employer';
    } else {
      this.permissions = 'employee';
    }
    return this.permissions;
  }

}
