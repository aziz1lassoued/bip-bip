import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataArray: any = [];
  role: any;
  ClientsArray: any;
counter:any
  livreursArray: any;
  livreeArray:any
  constructor(private ds: DataService,private ads:AuthadminService) {
    this.role=this.ads.getrole()

    this.ds.getallcommands().subscribe((response: any) => {
      this.dataArray = response.data.doc.length
      console.log(this.dataArray);
    
    });
        this.ds.getAllClient().subscribe((response: any) => {
      // get all-comman
      this.livreursArray = response.data.doc.filter((e:any) => e.role == 'livreur')
 

    
    });
    this.ds.getAllClient().subscribe((response: any) => {
      // get all-comman  https://colorlib.com//polygon/concept/pages/data-tables.html
      this. ClientsArray= response.data.doc.filter((e:any) => e.role == 'client')
 

    
    });
    this.ds.getallcommands().subscribe((response: any) => {
      // get all-comman
      this.livreeArray = response.data.doc.filter((e:any) =>e.LivreOuNon==true)
      console.log(this.dataArray)

    });
  }
 
  ngOnInit(): void {
  }

}
