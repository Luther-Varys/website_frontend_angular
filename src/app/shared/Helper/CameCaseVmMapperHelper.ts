

// import { keys } from 'ts-transformer-keys';

// import { } from "..\..\..\..\../node_modules/automapper-ts/dist/automapper";
// import { } from "../node_modules/automapper-ts/dist/automapper";

import "automapper-ts/dist/automapper";

export class CameCaseVmMapperHelper{

    constructor(){}

    public camelCaseMapVmBack_To_VmFrontend< T_front>(vmBack:any, vmFront:T_front): any{
        let keyControlNames = Object.keys(vmFront)

        // var objB = automapper.map('sourceType', 'destinationType', keyControlNames);
        // automapper.initialize;
        //DetailFormVM

        automapper.createMap('DetailFormVM', 'destinationType');
        var objB = automapper.map('DetailFormVM', 'destinationType', vmBack);

    }



    public objectKeysToCamel(o) {

        //This is a good solution to fix the camelcase model key issued realted to web api
        //https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase/32441713

        var newO, origKey, newKey, value
        if (o instanceof Array) {
          return o.map(function(value) {
              if (typeof value === "object") {
                value = this.objectKeysToCamel(value)
              }
              return value
          })
        } else {
          newO = {}
          for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
              newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
              value = o[origKey]
              if (value instanceof Array || (value !== null && value.constructor === Object)) {
                value = this.objectKeysToCamel(value)
              }
              newO[newKey] = value
            }
          }
        }
        return newO
      }



}