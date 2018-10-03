import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-wysiwyg-jodit',
  templateUrl: './wysiwyg-jodit.component.html',
  styleUrls: ['./wysiwyg-jodit.component.scss']
})
export class WysiwygJoditComponent implements OnInit, AfterViewInit {

  public joditOptions: any;
  public editorContent: string ="";

  public webApiresponse:string="<p>start</p>";

  @ViewChild('editor_1') editor_1: ElementRef;
  @ViewChild('editor_2') editor_2: ElementRef;

  constructor(private dataStorageService: DataStorageService) { 
    
  }

  ngOnInit() {
    this.initJoditEditor();
  }
  ngAfterViewInit() {
    (<any>this.editor_1).value = "<div>Helllo from <br> editor red start</div>";
  }

  ngOnDestroy() {
   (<any>this.editor_1).destruct();
   (<any>this.editor_2).destruct();
  }


  initJoditEditor(){
    this.joditOptions ={
      'buttons': 'source,|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,align,undo,redo,|,symbol,fullsize',
      'buttonsMD': 'source,|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,align,undo,redo,|,symbol,fullsize',
      'buttonsSM': 'source,|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,align,undo,redo,|,symbol,fullsize',
      'buttonsXS': 'source,|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,align,undo,redo,|,symbol,fullsize',
      'height': 220,
      };


      // this.joditOptions ={
      //   'buttons': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      //   'buttonsMD': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      //   'buttonsSM': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      //   'buttonsXS': '|,bold,strikethrough,underline,italic,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,,|,align,undo,redo,\n,|,symbol,fullsize',
      //   'height': 220,
      //   };


  }


  jodit_onChange($e){

    this.editorContent = $e.args[0];
    console.log("zr even onchange text: ",$e.args[0]);
    console.log("zr event: ",$e);
  }

  // jodit_onafterInit($e){
  //   console.log("zr event jodit_onafterInit($e): ",$e);
  // }


  wysiwygPost(){
    console.log("helllo world from wysiwygPost()")



    this.dataStorageService.wysiwygPost(this.editorContent).subscribe(
      (resp:any) => {
        console.log("ZR accountDetail() resp: ",resp);

        this.webApiresponse = resp;
        (<any>this.editor_2).value = resp.Message;
        // console.log("ZR accountDetail() resp: ",<DetailFormVM>resp);
        // console.log("ZR accountDetail() resp: ",resp as DetailFormVM);

        // let resp_new = this.toCamel(resp);
        // console.log("ZR accountDetail() resp: ",resp_new);

        // let vm_front: DetailFormVM = new DetailFormVM();

        // let ccHelper:CameCaseVmMapperHelper = new CameCaseVmMapperHelper();
        // ccHelper.camelCaseMapVmBack_To_VmFrontend<DetailFormVM>(resp, vm_front);



      },
      (error:any)=>{
        console.log("ZR accountDetail() error: ",error);
      },
      ()=>{

      }
    );
  }



}
