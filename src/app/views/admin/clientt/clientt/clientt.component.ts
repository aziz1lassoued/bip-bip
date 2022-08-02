import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-clientt',
  templateUrl: './clientt.component.html',
  styleUrls: ['./clientt.component.css'],
})
export class ClienttComponent implements OnInit {
  clientsArray: any = [];

  messagesuccsess = '';
  constructor(private ds: DataService,private route:Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.ds.getAllClient().subscribe((response: any) => {
      // get all-comman
      this.clientsArray = response.data.doc.filter((e:any) => e.role == 'client');

     

    
    });
  }
  // delete(id:any,i:number){
  // this.ds.delete(id).subscribe(Response=>{
  //   console.log(Response)
  //   this.dataArray.splice(i,1)
  // })

  //   }

  //     getdata(firstname:string,lastname:string,email:string,phone:number,age:number,adresse:string,id:any){
  //       this.messagesuccsess=''
  // this.datalivreur.firstname=firstname
  // this.datalivreur.lastname=lastname
  // this.datalivreur.email=email
  // this.datalivreur.phone=phone
  // this.datalivreur.age=age
  // this.datalivreur.adresse=adresse
  // this.datalivreur.id=id
  //  console.log(this.datalivreur)

  //     }
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
  delete(id:any,i:number){
    this.ds.deletecUserFoeAdmin(id).subscribe(Response=>{
      console.log(Response)
      this.clientsArray.splice(i,1)
    })
    }
    // details(id: any, i: any) {
    //   this.route.navigate(['admin/delclient/' + id]);
    // }
}
