import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {

    if(this.auth.isAuthenticated()){
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
    }

  }

  

  pingDbPublic(){
    this.dataStorageService.pingDbPublic();
  }

  pingDbPrivate(){
    this.dataStorageService.pingDbPrivate();
  }

  pingDbPrivateScoped(){
    this.dataStorageService.pingDbPrivateScoped();
  }


  createPoll(){
    this.dataStorageService.createPoll();
  }





}
