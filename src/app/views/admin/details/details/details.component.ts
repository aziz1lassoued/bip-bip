import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
dataArray : any ;
id=''
  messgError: any;
  constructor(private locationpanier:Location, private route:ActivatedRoute,private ds:DataService) {
    // this.route.params.subscribe(data =>console.log(data)) }
     this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id
  // this.ds.getCommandByIdforadmin(this.id).subscribe((Response:any)=>console.log(Response.data.data))

  this.ds.getCommandByIdforadmin(this.id).subscribe((Response:any)=>
    this.dataArray=Response.data.doc
   

    ,(err:HttpErrorResponse)=>this.messgError=err.message)
}
  ngOnInit(): void {
  }


  back(): void {
    this.locationpanier.back()
  }
  
}
