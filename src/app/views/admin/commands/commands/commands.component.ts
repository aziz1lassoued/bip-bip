import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css'],
})
export class CommandsComponent implements OnInit {
  dataArray: any = [];
  datalivreur:any =[];
  // datalivreur={
  //   FirstName:'',
  //   LastName:'',
  //   City:'',
  //   Longueur:0,
  //   Poids:0,
  //   Dest_FirstName:'',
  //   Dest_LastName:''

  // }
  // messagesuccsess=''
  check:any
  v:any
  constructor(private ds: DataService, private route:Router,private toast:NgToastService) {
    this.ds.getallcommands().subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.data.doc
      this.check=this.dataArray.statut
  

      console.log(this.dataArray);
    });

  }
  ngOnInit(): void {}
  delete(id:any,i:number){
  this.ds.deletecCmmandeFoeAdmin(id).subscribe(Response=>{
    console.log(Response)
    this.dataArray.splice(i,1)
    this.toast.success({detail:"Supprimer , avec succés ",position:'tl',summary:"",duration:2000})

    
  })
  }
  details(id:any,i:any){
    this.route.navigate(['admin/details/'+id])
  }
  detailsOffre(id:any,i:any){
    this.route.navigate(['admin/detailsoffre/'+id])
  }
  //   }

//       getdata(name:string,email:string,role:string,phone:number,adress:string){
        
//         // this.messPoidssuccsess=''
//   this.datalivreur.name=name
//   this.datalivreur.email=email
//   this.datalivreur.role=role
//   this.datalivreur.phone=phone
//   this.datalivreur.adress=adress
//    console.log(this.datalivreur)
//  }
  //    
  //     updatenewlivreur(f:any){

  //       let data=f.value
  //       this.ds.updatelivreur(this.datalivreur.id,data).subscribe(Response=>
  //         {
  //         console.log(Response)

  //         let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.datalivreur.id)
  //         this.dataArray[indexId].firstname=data.firstname
  //         this.dataArray[indexId].lastname=data.lastname
  //         this.dataArray[indexId].email=data.email
  //         this.dataArray[indexId].phone=data.phone
  //         this.dataArray[indexId].age=data.age
  //         this.dataArray[indexId].adresse=data.adresse
  //         this.messagesuccsess=` ${this.dataArray[indexId].firstname} Modifié avec succès `
  //         },(err:HttpErrorResponse)=>{
  //         console.log(err.message)
  //          } )
  // }
}
