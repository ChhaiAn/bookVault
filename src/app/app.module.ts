import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BsDatepickerModule } from "ngx-bootstrap";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { StudentComponent } from "./components/student/student.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RoutingModule } from "./routing.module";
import { HomeComponent } from './components/home/home.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentSearchBookComponent } from './components/student-search-book/student-search-book.component';
import { AllClassesComponent } from './components/all-classes/all-classes.component';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    StudentComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    StudentDashboardComponent,
    StudentSearchBookComponent,
    AllClassesComponent,
    CartComponent
  ],
  imports: [BrowserModule, BsDatepickerModule.forRoot(), RoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
