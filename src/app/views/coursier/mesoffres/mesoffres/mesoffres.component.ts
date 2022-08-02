import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styleUrls: ['./mesoffres.component.css']

})
export class MesoffresComponent implements OnInit {
  dataArray: any;
  id: any;
  _id: any;
  idCommande: any;
  cmd: any;

   idCmd:any

  constructor(private ds:DataService, private dialog: MatDialog,private router:Router,private toast:NgToastService ) {
    this.ds.getAllOffreforEmp().subscribe((Response:any)=> {
      // get all-comman
      
      this.dataArray = Response.offres
      // this.cmd = this.dataArray?.CommandeID?._id

      if(this.dataArray==''){
        this.router.navigate(['coursier/notfound'])
      }
      // this.dataArray = Response.offres?.CommandeID?._id
      // this.cmd=Response.offres.CommandeID?._id
console.log(this.dataArray);

    },(err:HttpErrorResponse)=>{
      this.router.navigate(['coursier/notfounded'])

    });
   }
   

  ngOnInit(): void {
  }



  // deleteOffre(i:number){
  //   // console.log(i);
  //   let offreId = this.dataArray._id
  //  console.log(commandID);
   
   
    
  // }
  




  delete(cmd:any,_id:any,i:number){

    this.ds.deleteOffre(cmd,_id,i).subscribe((Response) =>
    {
      this.dataArray.splice(i,1)
      this.toast.success({detail:"Offre !",position:"tl",summary:"à été supprimer",duration:5000})

    }, (err: HttpErrorResponse) => {
      this.toast.error({detail:"Vous êtes le responsable de cette commande ",position:"tl",summary:"ne pouver pas supprimer le demmande !!",duration:5000})



     } )
  
  }








// getOneOffre(id:any){
//   this.ds.getOneOffreforEmp(this.id).subscribe((Response :any)=>console.log(Response))
// }
// cancelRec(id:any,_id:any,i:any){

//   this.ds.cancelRec(_id,_id).subscribe((Response) =>
//   {
//     console.log(Response)
//     let url = `client/encours/${_id}/${_id}`;
//   }, (err: HttpErrorResponse) => {
//     this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Vous avez déja envoyé une demande",duration:5000})



//    } )

// }
details(id: any, i: any) {
  this.router.navigate(['coursier/modifieroffre/' + id]);
}

}
