import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-onemissions',
  templateUrl: './onemissions.component.html',
  styleUrls: ['./onemissions.component.css']
})
export class OnemissionsComponent implements OnInit {
  dataArray: any;
id:any
username:any
  Email: any;
  Prenom: any;
  Numero: any;
  constructor(private locationpanier:Location, private route:ActivatedRoute,private ds:DataService,private aus:AuthadminService) {

 


         this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id

    this.ds.readMissions(this.id).subscribe((Response:any)=>{
      this.dataArray=Response.data.Mission
      console.log(Response)
    })
  }
  back(): void {
    this.locationpanier.back()
  }
  ngOnInit(): void {}

}
