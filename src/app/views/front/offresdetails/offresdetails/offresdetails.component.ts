import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-offresdetails',
  templateUrl: './offresdetails.component.html',
  styleUrls: ['./offresdetails.component.css']
})
export class OffresdetailsComponent implements OnInit {
id:any
  dataoffre: any;
  dataArray: any;
  messgError: any;
  constructor(private locationpanier:Location ,private ds :DataService,private route:ActivatedRoute,private dsL:DataService) { 
   
    this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id

    this.ds.getCommandByIdforEclient(this.id).subscribe((Response:any)=>
  this.dataArray=Response.offre
  
   

    ,(err:HttpErrorResponse)=>this.messgError=err.message)
}

  
  ngOnInit(): void {
  }
  back(): void {
    this.locationpanier.back()
  }
}
