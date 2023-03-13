import { Injectable,EventEmitter, Output  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DateClimaService {
  //private data: BehaviorSubject<any[]>= new BehaviorSubject<any[]>([]);
  
  @Output() disparadordeTiempo: EventEmitter<any> = new EventEmitter();
 
  constructor() { }
}
