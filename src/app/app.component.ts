import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = "Olá, seja muito bem-vindo(a)!";
  sites = ["https://docs.google.com/forms/d/e/1FAIpQLSdaDNk7Z9R1-yCwB-PlT1KrV1P6sS3wkZqjCGQTiLQIdR_OuQ/viewform?usp=sf_link","https://docs.google.com/forms/d/e/1FAIpQLSfm06F8tCScvMNVBg8H9OJumpAgOU6GcLMGoLN_ehPErzY3yA/viewform?usp=sf_link"];
  strLink!: string;
  
  myFunc(){
  // Random approach 
    this.strLink = this.sites[Math.floor(Math.random() * (1 + 1))];
  // sending to html
    document.getElementById('link')?.setAttribute('href', this.strLink)
  } 
}



