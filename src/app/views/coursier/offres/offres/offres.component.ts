import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
})
export class OffresComponent implements OnInit {
  id:any
  messgError: any;
  dataArray: any;
  cmdArray: any;
  constructor(private route:ActivatedRoute,private ds:DataService,private toast:NgToastService,private router:Router) {
    // this.route.params.subscribe(data =>console.log(data)) }
     this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id
  // this.ds.getCommandByIdforadmin(this.id).subscribe((Response:any)=>console.log(Response.data.data))
  
  this.ds.getCommandByIdforEmp(this.id).subscribe((response: any) => {
    // get all-comman
    this.cmdArray = response.data.doc


    console.log(this.cmdArray)
   

    // if(this.dataArray.data.role==('client')){
    // console.log(this.dataArray)

    // }

    // if (this.dataArray.role == 'admin') {
    //   console.log(this.dataArray);
    // }
  });
  
}
  ngOnInit(): void {}

  addoffre(f:any){
    let offre=f.value

    console.log(offre)
   

    this.ds.sendreqCommandById(this.id,offre).subscribe(data=>{ 
      this.router.navigate(['coursier/redirect']);
      this.toast.success({detail:"success ",position:'tl',summary:"Offre ajouter avec succés",duration:3000})
      

      })
    
     }
  
    
}





// this.ds.sendreqCommandById(this.id).subscribe((response: any) => {
//   // get all-comman
//   // this.dataArray = response.data.doc;
//   console.log(response);
// });
