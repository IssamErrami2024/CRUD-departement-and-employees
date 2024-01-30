import { DepartmentComponent } from './departement/department.component';
import { AddEditDepartmentComponent } from './add-edit-department.component';
import { ShowDepartmentComponent } from './show-department.component';
import { AddEditEmployeeComponent } from './add-edit-employee.component';
import { ShowEmployeeComponent } from './show-employee.component';
import { EmployeeComponent } from './employee.component';
import { ApiserviceService } from './apiservice.service';
 import {HttpClientModule} from '@angular/common/http';
 import{formsmodule , Reactiveformsodule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({

    declarations : [
    AppComponent , 
    DepartmentComponent, 
    ShowDepartmentComponent , 
    DepartmentComponent, 
    EmployeeComponent , 
    ShowEmployeeComponent , 
    ShowEmployeeComponent, 
    AddEditDepartmentComponent, 
    AddEditEmployeeComponent
        ], 
       
    
    Imports : [ 
        BrowserModule, 
        AppRoutingModule, 
        formsmodule, 
        Reactiveformsodule
        ],
        
        providers : [ApiserviceService], 
         bootstrap : [AppComponent]

    })
