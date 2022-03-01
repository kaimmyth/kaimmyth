import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component:EmployeesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentCreateComponent,
    HeaderComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
