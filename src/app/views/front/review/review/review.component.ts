import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
idc:any
idl:any
  data: any;
  id: any
  dataArray: any;
    constructor(private ds:DataService,private router:ActivatedRoute,private toast:NgToastService,private route:Router) { 
        this.router.params.subscribe(params =>this.idc=params.idc)    // id stock dan var id
  this.router.params.subscribe(params =>this.idl=params.idl) 
  this.ds.getOneLivreur(this.idl).subscribe((Response:any)=>{
    this.dataArray=Response.data.user
    console.log(Response)
  })
  }

  ngOnInit(): void {
  }
post(f:any){
  let data=f.value

  console.log(data)
 
   // id stock dan var id

  this.ds.rate(this.idc,this.idl,data).subscribe((data:any)=>{
    this.toast.success({position:'tl',summary:"Evaluer avec succés",duration:3000})
      this.route.navigate(['client/panier'])
  })
}
}
