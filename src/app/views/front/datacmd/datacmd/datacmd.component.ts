import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-datacmd',
  templateUrl: './datacmd.component.html',
  styleUrls: ['./datacmd.component.css']
})
export class DatacmdComponent implements OnInit {

 dataArray : any ;
id=''
  messgError: any;
  username: any;
  Email: any;
  Prenom: any;
  Numero: any;

  constructor(private locationpanier:Location, private route:ActivatedRoute,private ds:DataService,private aus:AuthadminService) {
    this.username=this.aus.getusername()
    this.Email=this.aus.getuseremail()
    this.Prenom=this.aus.getuserprenom()
    this.Numero=this.aus.getusernumero()



         this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id

    this.ds.getCommandById(this.id).subscribe((Response:any)=>
  this.dataArray=Response.data.commande
   

    ,(err:HttpErrorResponse)=>this.messgError=err.message)
}
  ngOnInit(): void {
  }
  back(): void {
    this.locationpanier.back()
  }
}
