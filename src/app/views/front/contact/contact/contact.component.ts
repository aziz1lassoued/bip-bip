import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tosend: any;
  username: any;
  Email: any;
  Prenom: any;
  Numero: any;

  constructor(private ds:DataService,private toast:NgToastService,private route:Router,private aus:AuthadminService) { 
    this.username=this.aus.getusername()
    this.Email=this.aus.getuseremail()
    this.Prenom=this.aus.getuserprenom()
    this.Numero=this.aus.getusernumero()
  }

  ngOnInit(): void {
  }
  addMessage(f:any){
    let data=f.value

    console.log(data)
   

    this.ds.postMessage(data).subscribe(data=>{ 
      this.toast.success({detail:"success ",position:'tl',summary:"Votre message a été envoyé ",duration:5000})
     
    //   this.route.navigate(['/client/contact']
    //  )

      })
    
     }
     

}
