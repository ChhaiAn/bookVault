import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { StudentComponent } from "./components/student/student.component"

const routes: Routes = [
  { path: "", component: SignUpComponent },
  {path:"studentDashboard" , component: StudentComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule {}
