import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';
import { CommandsModule } from '../commands.module';

@Component({
  selector: 'app-all-commands',
  templateUrl: './all-commands.component.html',
  styleUrls: ['./all-commands.component.css']
})
export class AllCommandsComponent implements OnInit {
  dataArray: any = [];
  tosend: any;
  // datalivreur={
  //   FirstName:'',
  //   LastName:'',
  //   City:'',
  //   Longueur:0,
  //   Poids:0,
  //   Dest_FirstName:'',
  //   Dest_LastName:''

  // }
  // messagesuccsess=''
  constructor(private ds: DataService,private toast:NgToastService,private route :Router) {
    this.ds.AllUnknowCommandes().subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.data.commande
      console.log(this.dataArray)
      if(this.dataArray=='')
        {        this.route.navigate(['coursier/notfound']);}
    });
  }
  // #f="ngForm" (ngSubmit)="addMessage(f)"
  ngOnInit(): void {}

     details(id:any){
      this.route.navigate(['coursier/offres/'+id])
    }

}