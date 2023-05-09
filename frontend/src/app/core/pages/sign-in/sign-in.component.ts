import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../service/validators/custom-validators";
import {AuthenticationService} from "../../../service/security/authentication.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      user: this.formBuilder.group({
        email: new FormControl('',
          [Validators.required,
            CustomValidators.whiteSpace,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        password: new FormControl('', [])
      })
    });
  }

  signIn() {
    const email = this.signInForm.get('user.email')?.value;
    const password = this.signInForm.get('user.password')?.value;

    this.authService.signIn(email, password).subscribe({
      next: (response) => {
        this.messageService.add({severity:'success', summary:'Success',detail:'You have logged in successfully'});
        this.router.navigateByUrl("/products");
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary:'Error',detail:'Unable to log in'});
      }
    });
  }
}
