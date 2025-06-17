import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;
  
 handleclick(a : number){
 
  if(a == 1){
    return this.count ++;
  } else if (a == 2) {
    return this.count = 0;    
  }
  else{
    if (this.count == 0) {
      return this.count;
    }
    return this.count--;
  }
 }

}
