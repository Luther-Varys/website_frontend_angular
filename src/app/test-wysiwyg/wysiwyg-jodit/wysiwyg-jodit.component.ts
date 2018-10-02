import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wysiwyg-jodit',
  templateUrl: './wysiwyg-jodit.component.html',
  styleUrls: ['./wysiwyg-jodit.component.scss']
})
export class WysiwygJoditComponent implements OnInit {

  public joditOptions: any;

  constructor() { }

  ngOnInit() {
    this.initJoditEditor();
  }



  initJoditEditor(){
    this.joditOptions ={
      'buttons': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      'buttonsMD': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      'buttonsSM': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      'buttonsXS': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      'height': 220,
      };
  }


  jodit_onChange($e){
    console.log("zr even onchange: ",$e.args[0]);
  }

}
