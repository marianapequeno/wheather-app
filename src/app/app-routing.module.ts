import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./core/components/pages/home/home.component";

const routes : Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full'},
  { path: 'weather', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
