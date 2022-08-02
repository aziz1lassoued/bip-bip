import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { DataService } from 'src/app/views/srvices/data.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './aadmin-layout.component.html',
  styleUrls: ['./aadmin-layout.component.css']
})
export class AadminLayoutComponent implements OnInit {
username:any
name:any
role: any;
_id:any
UtilisateurID:any 
dataMessages :any
  dataMessages$: any;
  dataArray: any;
  count:any
  constructor(private ads:AuthadminService,private route:Router,private ds:DataService) {
    this.ds.allUnReadedMessage().subscribe((response: any) => {
      this.dataMessages = response.data.doc
      this.count=response.data.doc.length
      console.log(this.dataMessages)

    });
  
  
  this.username=this.ads.getusername()
  this.role=this.ads.getrole()




  


  
   }

  ngOnInit(): void {   this.ds.allUnReadedMessage() 

  }
  
  readOneMessage(id:any,i:any){
    this.ds.readMessage(id).subscribe((Response:any)=>{
      this.route.navigate(['admin/message/'+id])
      this.count=''
      
    })

  }
 

  

  

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    localStorage.removeItem('_id')
    localStorage.removeItem('Email')
    localStorage.removeItem('NumeroTlf')
    localStorage.removeItem('Prenom')
    localStorage.removeItem('_id')

    this.route.navigate(['/login/'])

  }
 
 

}










