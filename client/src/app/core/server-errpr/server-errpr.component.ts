import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-errpr',
  templateUrl: './server-errpr.component.html',
  styleUrls: ['./server-errpr.component.scss']
})
export class ServerErrprComponent implements OnInit {
error:any;
  constructor( private router:Router){
    
const navigation=this.router.getCurrentNavigation();
// this.error=navigation && navigation.extras && navigation.extras.state && navigation.extras.state.['error'];
this.error=navigation?.extras?.state?.['error'];

  }
  ngOnInit(): void {
    
  }
}
