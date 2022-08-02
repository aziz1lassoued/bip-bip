import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  styles: [`
  .class1{background:red;color:white;  }
  .class2{background: #ffeeee00;
    color: #ffffff00;
    font-family: emoji;
    text-decoration: line-through;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0;
    padding: 4px 44px 2px 36px;
    


  } 
  .class3{    background: #323232f7;
    font-family: emoji;
    color: red;
    text-decoration: line-through;
    cursor: not-allowed;
    pointer-events: none;
    padding: 4px 44px 2px 36px;
  }
  .class4{        background: #09fd1b;
    black: ;
    font-family: emoji;
    color: #ffffff;
    text-decoration: line-through;
    cursor: not-allowed;
    pointer-events: none;
    padding: 4px 44px 2px 36px;
    
  }
  
  `


  ]

})
export class PanierComponent implements OnInit {
  id: any;
  onecmdArray: any;
  commande: any;
  commandes: any = [];
  _id: any;
  dataArray: any;
  messageError: any;

  constructor(
    private ds: DataService,
    private toast: NgToastService,
    private route: Router
  ) {
    this._id = localStorage.getItem('_id');

    this.ds.getAllCommandesOfCurrentUser().subscribe(
      (response: any) => {
        this.commandes = response.commandes
        if (this.commandes == '') {
          this.route.navigate(['client/notfound']);
        }
        console.log(this.commandes);
      },
      (err: HttpErrorResponse) => {
        this.messageError = err;
        console.log(this.messageError);
        this.route.navigate(['client/notfound']);

      }
    );
  }

  details(id: any, i: any) {
    this.route.navigate(['client/offres/' + id]);
  }
  detailsdatacmd(id: any, i: any) {
    this.route.navigate(['client/datacmd/' + id]);
  }
  modifierDatacmd(id: any, i: any) {
    this.route.navigate(['client/modifiercommande/' + id]);
  }


  ngOnInit(): void {

  }
  delete(id: any, i: number) {
    this.ds.deleteCmdForClient(id).subscribe((Response) => {
      console.log(Response);
      this.commandes.splice(i, 1);
      this.toast.success({
        detail: 'commande',
        position: 'tl',
        summary: 'commande Annuler avec succés',
        duration: 5000,
      });
    });

  }

}
