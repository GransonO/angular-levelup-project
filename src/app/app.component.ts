import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Granson\'s Angular Project';

   constructor(){
     //call functions inside the constructor
    this.writeDoc("Granson");
   }

   writeDoc(name:string){
     console.log("The name is ", name);
   }
}
