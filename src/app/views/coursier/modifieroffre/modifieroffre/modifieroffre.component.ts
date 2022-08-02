import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from 'src/app/views/srvices/data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-modifieroffre',
  templateUrl: './modifieroffre.component.html',
  styleUrls: ['./modifieroffre.component.css']
})
export class ModifieroffreComponent implements OnInit {
  dataArray: any = [];
  name: any;
  datauser: any;
  registerForm: FormGroup;
  _id: any;
  id: any;
  constructor(private locationpanier:Location, private router:ActivatedRoute, private ds: DataService, private route: Router,private toast:NgToastService) {
    this.registerForm = new FormGroup({
      DateRamassage: new FormControl(),
      HeureRamassage: new FormControl(),
      DateArrive: new FormControl(),
      HeureArrive: new FormControl(),
      montant: new FormControl(),

    });

    this.router.params.subscribe(params =>this.id=params.id)    // id stock dan var id

    this.ds.getOneOffreforEmp(this.id).subscribe((response: any) => {
      // get all-comman
      this.dataArray = response.offre;
      console.log(this.dataArray)
      this.registerForm= new FormGroup({
        DateRamassage: new FormControl(this.dataArray ? this.dataArray.DateRamassage.substring(0,10) : ''),
        HeureRamassage: new FormControl(this.dataArray ? this.dataArray.HeureRamassage : ''),
        DateArrive: new FormControl(this.dataArray ? this.dataArray.DateArrive.substring(0,10) : ''),
        HeureArrive: new FormControl(this.dataArray ? this.dataArray.HeureArrive.substring(0,10) : ''),
        montant: new FormControl(this.dataArray ? this.dataArray.montant : ''),



      


      });
    });

    this.registerForm.valueChanges.subscribe((value)=> {
      console.log(value);
    })
  }

  ngOnInit(): void {}

  updateOffre (){
    let user = this.registerForm.value;
    console.log(user);

    this.ds.updateOffre(this.id, user).subscribe((res: any)=> {
      console.log(res);
      this.toast.success({position:'left',summary:"Modifiier  avec succés",duration:5000})

    });
    }
    back(): void {
      this.locationpanier.back()
    }
}
