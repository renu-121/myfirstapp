import { Component, OnInit } from '@angular/core';
import { Employee } from './models/login.model';
import { loginservices } from './services/loginservices';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myfirstapp';
  myfirstapp : Employee[] = [];
  Employee : Employee ={
    Emp_ID  : '',
    Emp_Name : '',
     DOB :'',

     Gender :  '',
     Email_ID :  '',
     Contact_Number :  '',
   Address :  '',
   State_Name : '',
    Country_ID : '',
    PinCode :  '',
   Emp_Type :  '',
    Department : '',
    Designation :'',
   DOJ  : '',
  Level  : '',
     Band  : '',
    Reporting_Manager  : '',
     Location  : '',
   WorkEXPDOJ : '',
  }


  constructor(private loginservices: loginservices) {
  }
      ngOnInit() : void {
        this.GetEmployee();
  }
  GetEmployee(){
      this.loginservices.GetEmployee()
      .subscribe(
        response =>{
          console.log (response);
        }
      );
    }


        onSubmit(){
          this.loginservices.AddEmp(this.Employee)
          .subscribe(
            response => {
              console.log(response);

        }
          )
     }

}
