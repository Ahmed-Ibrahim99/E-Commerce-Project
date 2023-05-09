import {FormControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
//whitespace validation
  static whiteSpace(control: FormControl): ValidationErrors | null {
    //check if string only contains whitespace
    if ((control.value != null) && (control.value.trim().length === 0)) {
      //invalid
      return {'whitespace': true};
    } else {
      //valid
      return null;
    }
  }
}
