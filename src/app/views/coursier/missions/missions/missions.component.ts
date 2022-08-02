import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css'],
  styles: [`
  
  .class1{    background: #0cdf264d;
    color: #ffffff4a;
    font-family: emoji;
    text-decoration: line-through;
    cursor: not-allowed;
    pointer-events: none;
    
    


  } 

  .class4{        background: #09fd1b;
    black: ;
    font-family: emoji;
    color: #ffffff;
 
    padding: 4px 44px 2px 36px;
    
  }
  
  `


  ]
})
export class MissionsComponent implements OnInit {
  dataArray: any;
count:any
v:any
  constructor(private ds:DataService,private toast:NgToastService,private route:Router ) {
    this.ds.getAllmissionsforEmp().subscribe((Response:any)=> {
      // get all-comman
      this.dataArray = Response.commande
      this.count= Response.commande.LivreOuNon
if(this.count==true){
 this.v=true
}else{
  this.v=false
}
      console.log(this.dataArray);
      if(this.dataArray==''){
        this.route.navigate(['coursier/notfound'])
      }
    });
   }

  ngOnInit(): void {
  }
 
  Change(_id:any,i:any){

    this.ds.ChangeCondition(_id).subscribe((Response) =>
    {
      console.log(Response)
      this.toast.success({
        detail: 'commande',
        position: 'left',
        summary: 'Términé avec succès',
        duration: 5000,
      }); 
    }, (err: HttpErrorResponse) => {
      this.toast.warning({position:"tl",summary:"",duration:3000})



     } )
  
  }
}
