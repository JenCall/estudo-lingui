import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = "Olá, seja muito bem-vindo(a)!";
  sites = ["https://app.perfectlyspoken.com/auth/login","https://docs.google.com/forms/d/e/1FAIpQLSfm06F8tCScvMNVBg8H9OJumpAgOU6GcLMGoLN_ehPErzY3yA/viewform","https://www.ru.nl/en/education/masters/cognitive-neuroscience-research","https://www.ucl.ac.uk"];
  strLink!: string;
  
  myFunc(){
  // Random approach 
    this.strLink = this.sites[Math.floor(Math.random() * (3 + 1))];
  // sending to html
    document.getElementById('link')?.setAttribute('href', this.strLink)
  }  

  // public i: number;
  // public nums: Array<number>;
  // public strLink!: string;

  // constructor() {
  //   this.i = 0;
  //   this.nums = [0,1,2,3];
  // }
  
  // myFunc(){
  //   this.i++ //this.i should start at -1
  //   if(this.i === 4){
  //   this.i = 0
  //    }
  //   console.log(this.sites[this.nums[this.i]])
    
  //   this.i = this.sites[this.nums[this.i]];
  //   this.strLink = this.sites[this.i];
  //   document.getElementById('link')?.setAttribute('href', this.strLink)
  // }
}



