import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-front-profile-layout',
  templateUrl: './front-profile-layout.component.html',
  styleUrls: ['./front-profile-layout.component.css']
})
export class FrontProfileLayoutComponent implements OnInit {
  username: any
  name: any
  // verif: boolean;
  role: any;
  dataoffres: any;
  count: any;
  constructor(private aus: AuthuserService, private route: Router, private ds: DataService) {
    this.ds.GetAllUnreadOffres().subscribe((response: any) => {
      this.dataoffres = response.data.offres
      this.count = response.data.offres.length
      console.log(this.dataoffres)

    });
    this.username = this.aus.getusername()
    this.role = this.aus.getroleu()

    // if (this.aus.loggedIn() == true) {
    //   this.verif = true
    // } else {
    //   this.verif = false

    // }









  }

  ngOnInit(): void {
    this.ds.GetAllUnreadOffres()
  }
  readOffre(id: any, i: any) {
    this.ds.readOffre(id).subscribe((Response: any) => {
      this.route.navigate(['client/offresdetails/' + id])
      this.count = ''

    })

  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    localStorage.removeItem('Email')
    localStorage.removeItem('NumeroTlf')
    localStorage.removeItem('Prenom')
    localStorage.removeItem('_id')


    this.route.navigate(['/login/'])

  }


}
