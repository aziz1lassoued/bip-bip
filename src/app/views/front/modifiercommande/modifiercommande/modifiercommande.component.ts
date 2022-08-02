import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-modifiercommande',
  templateUrl: './modifiercommande.component.html',
  styleUrls: ['./modifiercommande.component.css']
})
export class ModifiercommandeComponent implements OnInit {

  dataArray: any = [];
  name: any;
  datauser: any;
  registerForm: FormGroup;
  id: any;
  constructor(private locationpanier:Location, private ds: DataService, private route: Router,private toast:NgToastService,private router:ActivatedRoute) {
    this.registerForm = new FormGroup({
      Description: new FormControl(),
      NbreDePiece: new FormControl(),
      Longueur: new FormControl(),
      Largeur: new FormControl(),
      Hauteur: new FormControl(),
      Poids: new FormControl(),
      NomDestinataire: new FormControl(),
      PrenomDestinataire: new FormControl(),
      NumeroTlfDestinataire:new FormControl(),
      GouvernoratDestinataire:new FormControl(),
      VilleDestinataire:new FormControl(),
      AdressDestinataire:new FormControl(),
    });

    this.router.params.subscribe(params =>this.id=params.id)    // id stock dan var id


    this.ds.getCommandById(this.id).subscribe((Response: any) => {
      // get all-comman
      this.dataArray = Response.data.commande
      console.log(this.dataArray)
      this.registerForm= new FormGroup({
        Description: new FormControl(this.dataArray ? this.dataArray.Description : ''),
        NbreDePiece: new FormControl(this.dataArray ? this.dataArray.NbreDePiece : ''),
        Longueur: new FormControl(this.dataArray ? this.dataArray.Longueur : ''),
        Largeur: new FormControl(this.dataArray ? this.dataArray.Largeur : ''),
        Hauteur: new FormControl(this.dataArray ? this.dataArray.Hauteur : ''),
        Poids: new FormControl(this.dataArray ? this.dataArray.Poids : ''),
        NomDestinataire: new FormControl(this.dataArray ? this.dataArray.NomDestinataire : ''),
        PrenomDestinataire: new FormControl(this.dataArray ? this.dataArray.PrenomDestinataire : ''),
        NumeroTlfDestinataire: new FormControl(this.dataArray ? this.dataArray.NumeroTlfDestinataire : ''),
        GouvernoratDestinataire: new FormControl(this.dataArray ? this.dataArray.GouvernoratDestinataire : ''),
        VilleDestinataire: new FormControl(this.dataArray ? this.dataArray.VilleDestinataire : ''),
        AdressDestinataire: new FormControl(this.dataArray ? this.dataArray.AdressDestinataire : ''),


      });
    });

    this.registerForm.valueChanges.subscribe((value)=> {
      console.log(value);
    })
  }
  ngOnInit(): void {
  }
  updateCommand (){
    let user = this.registerForm.value;
    console.log(user);

    this.ds.updateCommande(this.id, user).subscribe((res: any)=> {
      console.log(res);
      this.toast.success({position:'tl',summary:"Modifiier  avec succés",duration:5000})

    });
    }
    back(): void {
      this.locationpanier.back()
    }
}
