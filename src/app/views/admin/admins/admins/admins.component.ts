import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  livreursArray:any=[]


  constructor(private ds: DataService){
  }
  ngOnInit(): void {
    this.getLivreurs();
  }

  getLivreurs(){
    this.ds.getAllClient().subscribe((response: any) => {
      // get all-comman
      this.livreursArray = response.data.doc.filter((e:any) => e.role == 'admin')
     

    
    });
  }

}
