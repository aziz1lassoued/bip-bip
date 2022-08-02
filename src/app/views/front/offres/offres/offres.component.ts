import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/views/srvices/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  CommandeID : any ;
  id=''
  dataArray:  any;
  dataoffre: any;
  constructor( private location: Location ,private route:ActivatedRoute,private ds:DataService,private router:Router,private toast:NgToastService) {
    this.route.params.subscribe(params =>this.id=params.id)    // id stock dan var id
    this.ds.getAllOffreforClient(this.id).subscribe((Response:any)=> {
      // get all-comman
      this.dataArray = Response.offres
      console.log(this.dataArray);
    });
   }


  ngOnInit(): void {
  }
 
  perform(CommandeID:any,LivreurID:any,i:any){

    this.ds.perfomOffre(CommandeID,LivreurID).subscribe((Response) =>
    {
      console.log(Response)
      let url = `client/encours/${CommandeID}/${LivreurID}`;
      this.router.navigate([url])
    }, (err: HttpErrorResponse) => {
      this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Vous avez déja envoyé une demande",duration:5000})

console.log(err)

     } )
  
  }

  details(id: any, i: any) {
    this.router.navigate(['client/offresdetails/' + id]);
  }
 
}



