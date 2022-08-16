import { Component, OnInit } from '@angular/core';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  // Icons
  faCircleUser = faCircleUser
  faBars = faBars

  constructor () { }

  ngOnInit (): void {
  }

}
