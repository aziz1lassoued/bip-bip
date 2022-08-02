import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-create-cmd',
  templateUrl: './create-cmd.component.html',
  styleUrls: ['./create-cmd.component.css']
})
export class CreateCmdComponent implements OnInit {
  ngOptions = ['Tunis','Ariana','Béja','Ben Arous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Kef','Mahdia','Manouba','Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Zaghouan']
  hh = 'Tunis';
  
  tosend: any;
  data: any;
  message: any;
  submitted = false;
  constructor(private route:Router,private ds:DataService,private toast:NgToastService) { }

  ngOnInit(): void { this.tosend=this.data
  }
  add(f:any){
    let data=f.value

    console.log(data)
   

    this.ds.addCommand(data).subscribe(data=>{ 
      this.toast.success({detail:"success ",position:'tl',summary:"commande ajouter avec succés",duration:5000})
      
      this.route.navigate(['/client/panier'],{state:{data:this.tosend}})

      }, (err: HttpErrorResponse) => {
        this.toast.error({detail:"L'opération a échoué",position:"tr",summary:"Veuillez remplir tous les champs",duration:5000})
  
  
  
       } )
    
     }
     
     

}
