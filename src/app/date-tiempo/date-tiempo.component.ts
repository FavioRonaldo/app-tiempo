import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateClimaService } from '../date-clima.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-date-tiempo',
  templateUrl: './date-tiempo.component.html',
  styleUrls: ['./date-tiempo.component.css']
})
export class DateTiempoComponent {
  city: string; 
  items: any[] = [];  
  selectedFullDates: any[] = [];
  result: any;
  parentMessage = "message from parent";
  showdates=true;  
  constructor(private http: HttpClient,private dataService: DateClimaService,private route: ActivatedRoute) {
    this.city="";
  }
  CambiarBoton(){
    this.showdates = !this.showdates;
  }

  ngOnInit(): void {    
    this.city=this.route.snapshot.params['city'];
    this.consultApi(this.city);
  }
  //This function makes the call to the NestJS API which sends the name of the city from which the query is to be made in the URL
  consultApi(city:string){
    this.http.get(`http://localhost:3000/api-tiempo-data/${city}`).subscribe((data) => {
      this.items.push(data);
      this.result = this.items[0][0];
      let selectedDates: any[] = [];
      this.items[0].forEach((obj: { dt: string | number | Date; }) => {
        let fecha = new Date(obj.dt);
        let anio = fecha.getFullYear();
        let mes = fecha.getMonth() + 1; 
        let dia = fecha.getDate();
        let fechaSolo = new Date(`${anio}-${mes}-${dia}`);
        const date = fechaSolo.getTime();
        if (selectedDates.indexOf(date) === -1 ) {
          selectedDates.push(date);
          obj.dt=`${anio}-${mes}-${dia}`;
          this.selectedFullDates.push(obj);
        }
      });
      
    });
  }
}
