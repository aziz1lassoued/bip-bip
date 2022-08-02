import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],
})
export class RegistreComponent implements OnInit {
  messageError: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  emailPattern1 = '^[@[0-9]';
  loading = false;

  email: any;
   ngOptions = ['Tunis','Ariana','Béja','Ben Arous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Kef','Mahdia','Manouba','Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Zaghouan']
  hh = 'Tunis';
  constructor(private aus: AuthuserService, private route: Router,private toast:NgToastService) {}

  ngOnInit(): void {}

  registre(f: any) {
    let data = f.value;

    this.aus.registre(data).subscribe(
      (data) => {
        this.route.navigate(['/login']);
this.toast.success({detail:"Enregistré avec succès ",position:'tl',summary:"",duration:2000})
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        this.messageError = err.error.message.errors;
        this.toast.error({detail:"Veuillez entrer des informations correctes ",position:'tl',summary:"",duration:2000})
        if(this.messageError = err.error.message.errors.Email)
        {
          this.toast.error({detail:"email ",position:'tl',summary:"",duration:2000});

        };
     

        // console.log(err.status)
      }
    );
  }
}
