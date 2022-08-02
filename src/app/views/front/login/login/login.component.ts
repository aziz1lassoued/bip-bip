import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


dataresive:any
  messageError: any;
 
constructor(private route:Router,private authUserService:AuthuserService, private authAdminService:AuthadminService,private authCoursierService:AuthCoursierService ,private toast:NgToastService) {
  if(!localStorage.getItem('token')){
    this.route.navigate(['/login/'])
  }
  if(this.authUserService.loggedIn()==true){
    this.route.navigate(['/profile/'])
  }
  if(this.authAdminService.loggedIn()==true){
    this.route.navigate(['/admin/dashboard/']);
  }
  if(this.authCoursierService.loggedIn()==true){
    this.route.navigate(['/coursier/allcommands/']);
  }



 }

ngOnInit(): void {
  
 }
 login(f:any){
  let data=f.value
  this.authAdminService.login(data).subscribe((Response:any)=>
{

this.dataresive=Response
this.authAdminService.saveDataProfile(this.dataresive.token,this.dataresive.data.user.role,this.dataresive.data.user.Nom,this.dataresive.data.user._id,this.dataresive.data.user.Prenom,this.dataresive.data.user.NumeroTlf,this.dataresive.data.user.Email);
if(Response.data.user.role == 'admin') this.route.navigate(['/admin/dashboard/']);
else if(Response.data.user.role == 'client') this.route.navigate(['/client']);

else if(Response.data.user.role == 'livreur') this.route.navigate(['/coursier/']);
this.toast.success({detail:"Bonjour , tu vas bien ",position:'tl',summary:"",duration:2000})

}, (err: HttpErrorResponse) => {
  // this.messageError = err.error.message;
  // console.log(this.messageError);
  this.toast.error({detail:"échec de la connexion",position:"tl",summary:"email ou mot de passe invalide",duration:3000})

  // right: 66%;
  // top: 86%;



  // console.log(err.status)
}



  )


}

}


