import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PermissionsService } from '../../services/permissions.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  permissions: string;
  constructor(private authService: AuthService,
      private router: Router,
      private flashMessagesService: FlashMessagesService,
      private permissionsService: PermissionsService) { }

  ngOnInit() {
    
  }


  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success', timeout: 2000});
    this.router.navigate(['login']);
  }

}
