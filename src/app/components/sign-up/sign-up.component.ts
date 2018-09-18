import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

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
  constructor() { }

  ngOnInit() { }
}
