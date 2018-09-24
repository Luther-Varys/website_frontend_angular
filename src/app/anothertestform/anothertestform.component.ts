import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataStorageService, DetailFormVM, ProfileDetailVM } from '../shared/data-storage.service';
import { ModelStateErrorValidatorHelper } from '../shared/Helper/ModelStateErrorValidatorHelper';
import { MapperVMToFormGroupHelper } from '../shared/Helper/MapperVMToFormGroupHelper';
import { CameCaseVmMapperHelper } from '../shared/Helper/CameCaseVmMapperHelper';

// import 'rxjs/Rx';

@Component({
  selector: 'app-anothertestform',
  templateUrl: './anothertestform.component.html',
  styleUrls: ['./anothertestform.component.scss']
})
export class AnothertestformComponent implements OnInit {

  profileForm:FormGroup;

  //This field will be used with the Custom Form validation
  //Check udemy lecture for cusstom validators: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6656518?start=0
  forbiddenUserNames = ["Chris", "Anna"];

  msgInvalidForm:string;


  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.profileForm = new FormGroup({
      "profileDetailForm": new FormGroup({
        //Will use custom validation --> "forbiddenNames"
        "firstName": new FormControl('My Name', [Validators.required, this.forbiddenNames.bind(this)]),
        "lastName": new FormControl(null),
      }),

      "city": new FormControl(null, Validators.required),
      "datebirth": new FormControl(null, Validators.required),
      "height": new FormControl(null, Validators.required),
      //Will use custom ASYNC validation --> "forbidenEmails"
      "email": new FormControl('ibiza@aol.com', [Validators.required,Validators.email], this.forbidenEmails),
    });

    //Form and form controls observables can be enables to check if the form is valid or check the status
    this.profileForm.valueChanges.subscribe(
      (value)=>console.log(value)
    );
    this.profileForm.statusChanges.subscribe(
      (status)=>console.log(status)
    );

  }
  //"FormControl Array" has not be used here, consider that there is also this feature that can be used.


  onSubmit() {

    console.log("ZR Submitting form.");

    let vmprofileDetailForm = new ProfileDetailVM();
    vmprofileDetailForm.firstName = "Marcello";
    vmprofileDetailForm.lastName = null;

    let vm = new DetailFormVM();
    vm.city = "Monza";
    vm.datebirth = null;
    vm.email = null;//"angular@angular5.it";
    vm.height = 23.3;
    vm.profileDetailForm = vmprofileDetailForm; 

    let obser = this.dataStorageService.createUser(vm);

    obser.subscribe(
      (resp:any) => {
        console.log(resp);
      },
      (error:any)=>{
        // this.msgInvalidFor = error;
        this.msgInvalidForm = error;

        let modelStateErrorValidatorHelper = new ModelStateErrorValidatorHelper(error, this.profileForm);
        modelStateErrorValidatorHelper.init();



        console.log(error);
      },
      ()=>{

      }
    )


    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileForm);
  }






  //************************* */
  //CUSTOM VALIDATION
  //Example of a "custom form validation"
  forbiddenNames(control: FormControl):{[s:string]:boolean}{
    //must be -1 so that it can be confirmed that it has not been found
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){ 
      //IF form control IS INVALID this object will be returned.
      return {'nameIsForbidden':true};
    }
    //If form control IS VALID null will be returned.
    //--Remember that if you return an object or a variable the control will be considered valid.
    return null;
  }




  //************************* */
  //CUSTOM VALIDATION
  //Example of a "ASYNC custom form validation"
  forbidenEmails(control:FormControl): Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value == "test@test.com"){
          resolve({"emailIsForbidden":true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }





  //****** */
  //Will SET the value of the form
  //will only update ALL of the form
  setValueOfForm(){
    this.profileForm.setValue({
      "profileDetailForm":{
        "firstName": "Gina",
        "lastName": "Gina Liast"
      },
      "city":"Miami",
      "datebirth": null,
      "height":16.3,
      "email":"setemail@set.com"
    });

  }
  //****** */
  //Will PATCH the value of the form
  //will only update PART of the form
  patchValueOfForm(){
    this.profileForm.patchValue({
      "profileDetailForm":{
        "firstName": "Patch Gina",
        "lastName": "Patch Lastname"
      }
    });
  }
  //****** */
  //Will RESET the value of the form
  resetValueOfForm(){
    //When radio buttons are present they all get deselect, you must pay attention
    //to activate one radio button once the reset has been done.
    this.profileForm.reset();
  }



  setManuallyErrorOnField(){
    this.profileForm.controls["city"].setErrors({'incorrect': true});
    this.profileForm.controls["city"].markAsTouched();
    this.profileForm.controls["city"].markAsDirty();


    (<FormGroup>this.profileForm.controls["profileDetailForm"]).controls["firstName"].setErrors({'incorrect': true});
    (<FormGroup>this.profileForm.controls["profileDetailForm"]).controls["firstName"].markAsTouched();
    (<FormGroup>this.profileForm.controls["profileDetailForm"]).controls["firstName"].markAsDirty();

  }



  map_vM_to_formGroup(){


    //Create testing dummy vm Data.
    let profileDetailVM = new ProfileDetailVM();
    let detailFormVM = new DetailFormVM();

    profileDetailVM.firstName = "James";
    profileDetailVM.lastName = "Bond";

    detailFormVM.profileDetailForm = profileDetailVM;
    detailFormVM.city = "Miami";
    detailFormVM.datebirth = null;
    detailFormVM.height = 6.65;
    detailFormVM.email = "secrete@email.com";


    let mapperVMToFormGroup:MapperVMToFormGroupHelper = new MapperVMToFormGroupHelper();
    mapperVMToFormGroup.map_vm_to_formGroup(this.profileForm, detailFormVM);

    mapperVMToFormGroup.map_formGroup_to_vm(this.profileForm, detailFormVM);

    console.log("ZR", this.profileForm);

    // for (var key in detailFormVM){

    //   let typeOfVar:string = typeof(detailFormVM[key]) ;

    //   console.log("zr the "+key+ " is of type "+ typeOfVar);
    //   if (typeOfVar === "object" && typeOfVar !== null) {
    //     console.log("zr "+key+ " is an object");
    //   }

    // }

    // //Get form keys
    // let formkeys = Object.keys(this.profileForm.controls);
    // for(key in formkeys)
    // {
    //     console.log(formkeys[key]);
    // }
    


  }

  ex_map_vm_to_formgroup(formGroup: FormGroup, vm: any, currentPath: string){

  }



  map_formGroup_to_vm(){

  }







  
  accountDetail(){
    this.dataStorageService.accountDetail().subscribe(
      (resp:DetailFormVM) => {
        console.log("ZR accountDetail() resp: ",resp);
        // console.log("ZR accountDetail() resp: ",<DetailFormVM>resp);
        // console.log("ZR accountDetail() resp: ",resp as DetailFormVM);

        // let resp_new = this.toCamel(resp);
        // console.log("ZR accountDetail() resp: ",resp_new);

        let vm_front: DetailFormVM = new DetailFormVM();

        let ccHelper:CameCaseVmMapperHelper = new CameCaseVmMapperHelper();
        ccHelper.camelCaseMapVmBack_To_VmFrontend<DetailFormVM>(resp, vm_front);



      },
      (error:any)=>{
        console.log("ZR accountDetail() error: ",error);
      },
      ()=>{

      }
    );

  }


}



// export class MapperVMToFormGroup{
  
//   constructor(){

//   }


//   public map_vm_to_formGroup(formGroup: FormGroup, vm: any){

//     this._recursive_map_vm_to_formGroup(formGroup, vm);

//   }

//   public map_formGroup_to_vm(formGroup: FormGroup, vm: any){

//     this._recursive_map_formGroup_to_vm(formGroup, vm);

//   }

//   private _recursive_map_vm_to_formGroup(formGroup: FormGroup, vm: any){ //currentFieldPath
//     let keyControlNames = Object.keys(formGroup.controls)

//     for(let key in keyControlNames){

//       let controlGroupName = keyControlNames[key];

//       if(formGroup.controls[controlGroupName].constructor.name === "FormControl"){
//         //Set value to the FormControl
//         (<any>formGroup.controls[controlGroupName].value) = vm[controlGroupName];

//       }else if(formGroup.controls[controlGroupName].constructor.name === "FormGroup"){
//         if(vm[controlGroupName] === null || vm[controlGroupName] === undefined)
//           continue;
//         //Set value to the FormGroup
//         this._recursive_map_vm_to_formGroup((<FormGroup>formGroup.controls[controlGroupName]), vm[controlGroupName]);

//       }else{

//         throw new Error('zr in _recursive_map_vm_to_formGroup: formGroup with control or formgroup with key '+controlGroupName+' is not a FormControl or a FormGroup');
//       }
//     }

//   }

//   private _recursive_map_formGroup_to_vm(formGroup: FormGroup, vm: any){
//     let keyControlNames = Object.keys(formGroup.controls);

//     for(let key in keyControlNames){

//       let controlGroupName = keyControlNames[key];

//       if(formGroup.controls[controlGroupName].constructor.name === "FormControl"){
//         //Set value to the VM
//         vm[controlGroupName] = (<any>formGroup.controls[controlGroupName].value);

//       }else if(formGroup.controls[controlGroupName].constructor.name === "FormGroup"){
//         if(vm[controlGroupName] === null || vm[controlGroupName] === undefined)
//           continue;
//         //Set value to the vm from FormGroup
//         this._recursive_map_formGroup_to_vm((<FormGroup>formGroup.controls[controlGroupName]), vm[controlGroupName]);

//       }else{

//         throw new Error('zr in _recursive_map_formGroup_to_vm: formGroup with control or formgroup with key '+controlGroupName+' is not a FormControl or a FormGroup');
//       }
//     }

//   }






// }
