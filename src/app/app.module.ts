import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BsDatepickerModule } from "ngx-bootstrap";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { StudentComponent } from "./components/student/student.component";
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RoutingModule } from './app/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    StudentComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, BsDatepickerModule.forRoot(), RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
