import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthadminService {



  token: any;
 
  
helper=new JwtHelperService()
  role:any
  constructor(private http:HttpClient) {

   }


  login(data:any){

    return this.http.post('v2/users/login',data)
  } 

saveDataProfile(token:any,role:any,Nom:any,_id:any,Prenom:any,NumeroTlf:any,Email :any){
 let decodeToken=this.helper.decodeToken(token)
 

//  

  localStorage.setItem('token',token)
  localStorage.setItem('role',role)
  localStorage.setItem('username',Nom)
  localStorage.setItem('Prenom',Prenom)
  localStorage.setItem('NumeroTlf',NumeroTlf)
  localStorage.setItem('Email',Email)
  localStorage.setItem('_id',_id)


console.log()

 



}

 getusername(){
    let name:any=localStorage.getItem('username')
    return name
 }
 getuserprenom(){
  let Prenom:any=localStorage.getItem('Prenom')
  return Prenom
}
getusernumero(){
  let NumeroTlf:any=localStorage.getItem('NumeroTlf')
  return NumeroTlf
}
getuseremail(){
  let Email:any=localStorage.getItem('Email')
  return Email
}
 getrole(){
   let role:any=localStorage.getItem('role')
   return role
 }




 
 loggedIn(){
    this.token=localStorage.getItem('token')

    if(!this.token){
    return false
 }
   let decodeToken=this.helper.decodeToken(this.token)
   
   this.role=localStorage.getItem('role')



    if(this.role!=='admin'){
      return false

    }
    if (this.helper.isTokenExpired(this.token)){
      return false
    }
    return true
  }
 
  
}
