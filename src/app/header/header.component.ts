import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../services/index.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
headerArr:any=[];
  constructor(private indexService : IndexService, private router:Router) { }

  ngOnInit(): void {
    this.indexService.GetHeader().subscribe(
      result=>{
        this.headerArr=result;
      }
    );
   }
   
   BookTable()
   {
    this.router.navigate(['reservation/tables']);
   }
   Home()
   {
    this.router.navigate(['index']);
   }
   AboutUs()
   {
    this.router.navigate(['aboutus']);
   }
   ContactUs()
   {
    this.router.navigate(['contactus']);
   }
}
