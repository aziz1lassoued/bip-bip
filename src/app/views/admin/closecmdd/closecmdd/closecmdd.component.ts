import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-closecmdd',
  templateUrl: './closecmdd.component.html',
  styleUrls: ['./closecmdd.component.css']
})
export class ClosecmddComponent implements OnInit {
  dataArray:any

  constructor(private ds:DataService,private route:Router,private toast:NgToastService) { 
  //   this.ds.getallcommands().subscribe((response: any) => {
  //     // get all-comman
  //     this.dataArray = response.data.doc.filter((e:any) => e.LivreOuNon == 'false');
  //     console.log(this.dataArray)
  //   });
  // }
  this.ds.AllCloseCommandes().subscribe((response: any) => {
    // get all-comman
    this.dataArray = response.data.doc.filter((e:any) =>e.LivreOuNon==false)
    console.log(this.dataArray)
  });
}

  ngOnInit(): void {
  }
  delete(id:any,i:number){
    this.ds.deletecCmmandeFoeAdmin(id).subscribe(Response=>{
      console.log(Response)
      this.dataArray.splice(i,1)
      
      
      this.toast.success({detail:"Supprimer , avec succés ",position:'tl',summary:"",duration:2000})
    })
    }
    details(id:any,i:any){
      this.route.navigate(['admin/details/'+id])
    }
    detailsOffre(id:any,i:any){
      this.route.navigate(['admin/detailsoffre/'+id])
    }
}
