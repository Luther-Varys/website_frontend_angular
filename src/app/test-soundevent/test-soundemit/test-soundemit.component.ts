import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-soundemit',
  templateUrl: './test-soundemit.component.html',
  styleUrls: ['./test-soundemit.component.scss']
})
export class TestSoundemitComponent implements OnInit {


  audioFilePath_sweetalertsound5:string = "/assets/audio/event/72129__kizilsungur__sweetalertsound5.wav";

  constructor() { }

  ngOnInit() {
  }

  playAudio(){
    let audio = new Audio();
    audio.src = this.audioFilePath_sweetalertsound5;
    audio.load();
    audio.play();

    
  }



}
