import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-tiempo';
  ciudad: any;
  cityform: FormGroup = new FormGroup({});  
  constructor(private formBuilder: FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.constructForm();
  }
  constructForm(){
    this.cityform = this.formBuilder.group({
      city: ['', Validators.required]
    });
    console.log('the form was created');
  };
  sendcity(){
    this.ciudad=this.cityform.value.city;
    console.log('city: ',this.cityform.value.city);
    this.router.navigate(['/tiempoactual',this.ciudad]);
  }
}

