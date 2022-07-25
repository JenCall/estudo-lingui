import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = "Olá, seja muito bem-vindo(a)!";
  sites = ["https://docs.google.com/forms/d/e/1FAIpQLSdaDNk7Z9R1-yCwB-PlT1KrV1P6sS3wkZqjCGQTiLQIdR_OuQ/viewform?usp=sf_link","https://docs.google.com/forms/d/e/1FAIpQLSd7ZhU5z7dpKjX1R1u8LK9z78oW6i-JLCOCsCmbYT6PIo3dIg/viewform?usp=sf_link"];
  strLink!: string;
  
  myFunc(){
  // Random approach 
    this.strLink = this.sites[Math.floor(Math.random() * (1 + 1))];
  // sending to html
    document.getElementById('link')?.setAttribute('href', this.strLink)
  } 
}



