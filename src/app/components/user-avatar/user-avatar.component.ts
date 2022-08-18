import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  // Default user avatar image
  //DEFAULT_USER_AVATAR_IMAGE: string = '../../../assets/images/default_user.png'
  DEFAULT_USER_AVATAR_IMAGE: string = 'https://images.pexels.com/photos/9198359/pexels-photo-9198359.jpeg'
  isUserLoggedIn: boolean = true

  constructor () { }

  ngOnInit (): void {
  }

}
