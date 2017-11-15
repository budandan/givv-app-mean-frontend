import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  employerLink: string;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('C:\\Users\\drfer\\Desktop\\employer\\employer.html');
  }

}
