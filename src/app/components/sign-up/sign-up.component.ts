import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule} from "@angular/forms";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  bodyContainer = {
    'height': 'calc(100vh - 120px)'
  }
  formContainer = {

    'max-width': '40em !important',
    'display': 'flex',
    'align-items': 'center'
  }

  signUpForm: FormGroup;
  sports = ['Aquatics','Baseball','Basketball','Crosscountry','Football','Soccer','Softball','Track & Field','Volleyball']
  genders = ['Male','Female']
  
  ngOnInit() { 
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      'middleName': new FormControl(null),
      'lastName': new FormControl(null, Validators.required),
      'dob': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^[A-Za-z0-9._%+-]+@student.lbcc.edu$")]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'studentID': new FormControl(null,[Validators.required,Validators.minLength(7),Validators.pattern("^[0-9]+$")]),
      'sport': new FormControl(null,Validators.required),
      'gender': new FormControl(null,Validators.required)
      
    });
  }

  onSubmit() {
    console.log(this.signUpForm)
  }

}
