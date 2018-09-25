import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { StudentComponent } from "./components/student/student.component";
import { CartComponent } from "./components/cart/cart.component";
import { StudentDashboardComponent } from "./components/student-dashboard/student-dashboard.component";
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
  { path: "", component: SignUpComponent },
  { 
    path: "student",
    component: StudentComponent,
    children: [
      {path:"" , redirectTo:'studentDashboard', pathMatch: 'full'},
      {path:"studentDashboard" , component: StudentDashboardComponent },
      {path:"cart" , component: CartComponent},
      {path:"search", component: SearchComponent}
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule {}
