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
    console.log('hhh: ',this.city);
    this.consultApi(this.city);
  }
  consultApi(city:string){
    this.http.get(`http://localhost:3000/api-tiempo-data/${city}`).subscribe((data) => {
      this.items.push(data);
      console.log(this.items[0]);
      this.result = this.items[0][0];
      let selectedDates: any[] = [];
      this.items[0].forEach((obj: { dt: string | number | Date; }) => {
        let fecha = new Date(obj.dt);
        let anio = fecha.getFullYear();
        let mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan en cero, por lo que debemos sumar 1 para obtener el mes correcto
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
  /*onClick() {
    const param = 'Quito';
    const url = `http://localhost:3000/api-tiempo-data/${param}`;

    this.http.get(url).subscribe(
      data => this.result = data,
      error => console.error(error)
    );
  }*/
}
