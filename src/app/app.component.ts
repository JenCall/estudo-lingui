import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = "Olá, seja muito bem-vindo(a)!";
  sites = ["https://app.perfectlyspoken.com/auth/login","https://docs.google.com/forms/d/e/1FAIpQLSfm06F8tCScvMNVBg8H9OJumpAgOU6GcLMGoLN_ehPErzY3yA/viewform","https://www.ru.nl/en/education/masters/cognitive-neuroscience-research","https://www.ucl.ac.uk"];
  item = this.sites[0];
  items = document.getElementById('link');

  public i: number;
  public nums: Array<number>;
  public strLink!: string;

  constructor() {
    this.i = -1;
    this.nums = [0,1,2,3];
  }
  
  myFunc(){
    this.i++
    if(this.i === 4){
      this.i = 0
    }
    console.log(this.sites[this.nums[this.i]])
    this.strLink = this.sites[this.nums[this.i]];
    
    document.getElementById('link')?.setAttribute('href', this.strLink)
    
  }  
}



