import { Component, OnInit } from '@angular/core';
import { AppConfigVariables } from '../../shared/appconfigvariables';

@Component({
  selector: 'app-imageuploader',
  templateUrl: './imageuploader.component.html',
  styleUrls: ['./imageuploader.component.scss']
})
export class ImageuploaderComponent implements OnInit {
  
  baseUrlBackend = AppConfigVariables.baseUrlBackend();
  uploadSaveUrlPublic = this.baseUrlBackend+'api/TestApi/ImageUploadPublic'; // should represent an actual API endpoint
  uploadSaveUrlPrivate = this.baseUrlBackend+'api/TestApi/ImageUploadPrivate'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint


  constructor() { 
  }

  ngOnInit() {
  }

}
