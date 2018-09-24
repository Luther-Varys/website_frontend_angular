import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CrudDboApplicationUserService } from '../../shared/webapi/crud.autogen/autogen-crud-dbo.service';
import { MapperVMToFormGroupHelper } from '../../shared/Helper/MapperVMToFormGroupHelper';
import { ApplicationUser_VMC } from '../../shared/bl/vm/crud.autogen/VmC';

import { Observable } from 'rxjs';
import { ModelStateErrorValidatorHelper } from '../../shared/Helper/ModelStateErrorValidatorHelper';

@Component({
  selector: 'dbo-applicationuser-create',
  templateUrl: './dbo-applicationuser-create.component.html',
  styleUrls: ['./dbo-applicationuser-create.component.scss']
})
export class DboApplicationuserCreateComponent implements OnInit {


  mainForm:FormGroup;
  mapperVMToFormGroup = new MapperVMToFormGroupHelper();
  msgInvalidForm:string;

  constructor(private crudDboApplicationUserService:CrudDboApplicationUserService) { }

  ngOnInit() {
    this.initForm();
  }



  initForm(){
    this.mainForm = new FormGroup({
      "firstName": new FormControl(null, Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "dateOfBirth": new FormControl(null, Validators.required),
      "gender": new FormControl(null, [Validators.required]),
    });

    //Form and form controls observables can be enables to check if the form is valid or check the status
    this.mainForm.valueChanges.subscribe(
      (value)=>console.log(value)
    );
    this.mainForm.statusChanges.subscribe(
      (status)=>console.log(status)
    );

  }



  onSubmit() {
    console.log("ZR Submitting form in component CrudDboApplicationuserComponent.");

    
    let vmc = new ApplicationUser_VMC();
    this.mapperVMToFormGroup.map_formGroup_to_vm(this.mainForm, vmc);

    let obser:Observable<any> = this.crudDboApplicationUserService.createApplicationUser(vmc);

    obser.subscribe(
      (resp:any) => {
        console.log(resp);
      },
      (error:any)=>{
        this.msgInvalidForm = error;
        let modelStateErrorValidatorHelper = new ModelStateErrorValidatorHelper(error, this.mainForm);
        modelStateErrorValidatorHelper.init();
        console.log(error);
      },
      ()=>{

      }
    )

  }








}
