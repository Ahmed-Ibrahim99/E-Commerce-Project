import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../service/validators/custom-validators";
import {AuthenticationService} from "../../../service/security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      user: this.formBuilder.group({
        email: new FormControl('',
          [Validators.required,
            CustomValidators.whiteSpace,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        password: new FormControl('', [])
      })
    });
  }

  signUp() {
    const email = this.signUpForm.get('user.email')?.value;
    const password = this.signUpForm.get('user.password')?.value;

    this.authService.signUp(email, password).subscribe({
      next: response => {
        this.router.navigateByUrl("/products");
      },
      error: (error) => {
        alert(email + " " + password);
      }
    });
  }
}
