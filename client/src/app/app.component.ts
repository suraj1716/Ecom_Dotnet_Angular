import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient) {}
  
  ngOnInit(): void {
   this.http.get('https://localhost:5108/api/products').subscribe((response:any)=>{
    console.log(response);
    
   },error=>{
    console.log(error);
  
   
  });

}
  title = 'client';
}
