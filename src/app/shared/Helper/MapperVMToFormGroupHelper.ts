import { FormGroup } from "@angular/forms";




export class MapperVMToFormGroupHelper{
  
    constructor(){
  
    }
  
  
    public map_vm_to_formGroup(formGroup: FormGroup, vm: any){
  
      this._recursive_map_vm_to_formGroup(formGroup, vm);
  
    }
  
    public map_formGroup_to_vm(formGroup: FormGroup, vm: any){
  
      this._recursive_map_formGroup_to_vm(formGroup, vm);
  
    }
  
    private _recursive_map_vm_to_formGroup(formGroup: FormGroup, vm: any){ //currentFieldPath
      let keyControlNames = Object.keys(formGroup.controls)
  
      for(let key in keyControlNames){
  
        let controlGroupName = keyControlNames[key];
  
        if(formGroup.controls[controlGroupName].constructor.name === "FormControl"){
          //Set value to the FormControl
          (<any>formGroup.controls[controlGroupName].value) = vm[controlGroupName];
  
        }else if(formGroup.controls[controlGroupName].constructor.name === "FormGroup"){
          if(vm[controlGroupName] === null || vm[controlGroupName] === undefined)
            continue;
          //Set value to the FormGroup
          this._recursive_map_vm_to_formGroup((<FormGroup>formGroup.controls[controlGroupName]), vm[controlGroupName]);
  
        }else{
  
          throw new Error('zr in _recursive_map_vm_to_formGroup: formGroup with control or formgroup with key '+controlGroupName+' is not a FormControl or a FormGroup');
        }
      }
  
    }
  
    private _recursive_map_formGroup_to_vm(formGroup: FormGroup, vm: any){
      let keyControlNames = Object.keys(formGroup.controls);
  
      for(let key in keyControlNames){
  
        let controlGroupName = keyControlNames[key];
  
        if(formGroup.controls[controlGroupName].constructor.name === "FormControl"){
          //Set value to the VM
          vm[controlGroupName] = (<any>formGroup.controls[controlGroupName].value);
  
        }else if(formGroup.controls[controlGroupName].constructor.name === "FormGroup"){
          if(vm[controlGroupName] === null || vm[controlGroupName] === undefined)
            continue;
          //Set value to the vm from FormGroup
          this._recursive_map_formGroup_to_vm((<FormGroup>formGroup.controls[controlGroupName]), vm[controlGroupName]);
  
        }else{
  
          throw new Error('zr in _recursive_map_formGroup_to_vm: formGroup with control or formgroup with key '+controlGroupName+' is not a FormControl or a FormGroup');
        }
      }
  
    }
  
  
  
  
  
  
  }