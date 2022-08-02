import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-front-livreur-layout',
  templateUrl: './front-livreur-layout.component.html',
  styleUrls: ['./front-livreur-layout.component.css']
})
export class FrontLivreurLayoutComponent implements OnInit {
  verif: boolean;
  username: any;
  role: any;
  dataMissions:any
  count:any
  Prenom: any;
  constructor(private aus:AuthCoursierService,private route:Router,private ds :DataService) {
    this.ds.GetAllUnreadMissions().subscribe((response: any) => {
      this.dataMissions =response.data.Missions
      this.count=response.data.Missions.length
      console.log(response)

    });
    this.username=this.aus.getlivrname();
    this.Prenom=this.aus.getlivrePrenom();
    // this.username=this.aus.getlivrrole()

    if (this.aus.loggedIn()==true){
      this.verif=true
    }else{this.verif=false

  }
}

  
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    localStorage.removeItem('Email')
    localStorage.removeItem('NumeroTlf')
    localStorage.removeItem('Prenom')
    localStorage.removeItem('_id')


    this.route.navigate(['/login/'])

  }
  toggleSideBar(){
    let e = <HTMLElement>document.querySelector('#sidebarToggle');
    if (e.style.width == '0rem'){
      e.style.width = '9.5rem';
    }else {
      e.style.width = '0rem';
    }
    
  }
  readMissions(id:any,i:any){
    this.ds.readMissions(id).subscribe((Response:any)=>{
      this.route.navigate(['coursier/onemissions/'+id])
      this.count=''
      
    })

  }
}
