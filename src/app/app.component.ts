import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'angularApp';
  
  isChecked : boolean = true; 
  textValue = '';
  
  showMsg(event: string){
    this.textValue = event;
    if (this.textValue === 'ahmed'){
      alert("Hello " + this.textValue);
    }
  }
   methexcute1 = '';
   methexucute2 = '';
    method1(){
    console.log('Method 1 is called');
    this.methexcute1 = 'Method 1 is called';
  }
  method2(){
    console.log('Method 2 is called');
    this.methexucute2 = 'Method 2 is called';
  }
}
