import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.css']
})
export class LivreursComponent implements OnInit {

  livreursArray:any=[]


  constructor(private ds: DataService){
  }
  ngOnInit(): void {
    this.getLivreurs();
  }

  getLivreurs(){
    this.ds.getAllClient().subscribe((response: any) => {
      // get all-comman
      this.livreursArray = response.data.doc.filter((e:any) => e.role == 'livreur')
     console.log(this.livreursArray)

    
    });
  }
 

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
    this.livreursArray.splice(i,1)
  })
  }
}
