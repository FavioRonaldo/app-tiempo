import { Component,Input  } from '@angular/core';
import { DateClimaService } from '../date-clima.service';
@Component({
  selector: 'app-varios-dias-clima',
  templateUrl: './varios-dias-clima.component.html',
  styleUrls: ['./varios-dias-clima.component.css']
})
export class VariosDiasClimaComponent {
  @Input() selectedFullDates: any[]=[]; 
  //selectedFullDates: any[] = [];

  constructor(private dataService: DateClimaService) {}

  ngOnInit(): void {
    console.log('datos: ',this.selectedFullDates);
    /*this.dataService.disparadordeTiempo.subscribe(
      (array: any[]) => {
        console.log(array);
      });*/

    
  }
}
