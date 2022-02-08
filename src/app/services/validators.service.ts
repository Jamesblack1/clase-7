import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noSmith(control : FormControl):any{

    if(control.value?.toLowerCase()=== 'smith'){
      return {
        noSmith:true
      }
    }
    return null;

  }
}
