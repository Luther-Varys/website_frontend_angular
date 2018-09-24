import { FormGroup } from "@angular/forms";

export class ModelStateErrorValidatorHelper {


    private error: any;
    private formGroup: FormGroup;

    constructor(_error: any, _formGroup: FormGroup) {
        this.error = _error;
        this.formGroup = _formGroup;
    }




    public init() {

        //   let modelStateValidatorHelper: ModelStateValidatorHelper = new ModelStateValidatorHelper();

        if (this.error.error.hasOwnProperty('ModelState')) {
            for (var key in this.error.error.ModelState) {
                // console.log("ZR: key--> " + key);

                let res = this._getPartsOfNameSpace(key);
                // console.log(res);

                let tempData: any;

                for (var i = 0; i < res.length; i++) {

                    //1 namespace level
                    if (res.length === 1) {
                        this.formGroup.controls[res[0]].setErrors({ 'incorrect': true });
                        this.formGroup.controls[res[0]].markAsTouched();
                        this.formGroup.controls[res[0]].markAsDirty();
                        continue;
                        //more than 1 namespace level
                    } else {
                        //FIRST property name namespace
                        if (i === 0) {
                            tempData = (<FormGroup>this.formGroup.controls[res[i]]);
                            continue;
                        }
                        //IN BETWEEN property name namespace
                        if ((i !== 0) && (i !== (res.length - 1))) {
                            tempData = tempData.controls[res[i]];
                            continue;
                        }
                        //LAST property name namespace
                        if (i === (res.length - 1)) {
                            tempData.controls[res[i]].setErrors({ 'incorrect': true });
                            tempData.controls[res[i]].markAsTouched();
                            tempData.controls[res[i]].markAsDirty();
                            continue;
                        }

                    }



                }

                // for (var i = 0; i < response.ModelState[key].length; i++) {
                //     errors.push(response.ModelState[key][i]);
                // }

            }
        }



    }



    private _getPartsOfNameSpace(strToCheck): string[] {

        let res = strToCheck.split(".");
        // console.log("ZR res split: ", res);

        // let res_lower = [];

        //Will remove vm if present as the first path in the field mapping
        if (res.length > 0) {
            if (res[0].toLowerCase() === "vm") {
                res.splice(0, 1);
            }
        }


        for (var i in res) {
            res[i] = this._lowercaseFirstLetter(res[i]);
        }


        // console.log("ZR res split splice: ", res);

        // res.forEach(element => {
        //     element = lowercaseFirstLetter(element);
        //     // console.log("zr element: ", element);
        //     if(element === "vm")
        //     res_lower.push(element);
        // });

        // // console.log("ZR res split lower: ", res);
        // console.log("ZR res split lower: ", res_lower);    

        return res;
    }


    private _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    private _lowercaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }


}