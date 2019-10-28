import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-social-media-login',
  templateUrl: './social-media-login.component.html',
  styleUrls: ['./social-media-login.component.scss']
})

export class SocialMediaLoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService) {

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}

