import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DeleteComponent } from '../admin/closecmdd/closecmdd/delete/delete/delete.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  id: any;

  constructor(private http: HttpClient ) {}

  getallcommands() {
    return this.http.get('v2/commandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  AllReachedCommandes() {
    return this.http.get('v2/commandes/AllReachedCommandes', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  AllOpenCommandes() {
    return this.http.get('v2/commandes/AllOpenCommandes', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  AllCloseCommandes() {
    return this.http.get('v2/commandes/AllCloseCommandes', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getAllClient() {
    return this.http.get('v2/users/' , {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });

  }
  getAllMessagesFromClient() {
    return this.http.get('v2/messages/' , {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });

  }
  addCommand(profile: any) {
    return this.http.post('v2/commandes/', profile, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
    
  }
  postMessage(profile: any) {
    return this.http.post('v2/messages/', profile, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
    
  }
  sendreqCommandById(_id: any, data: any) {
    let url = `v2/commandes/SendRequest/${_id}`;
    return this.http.post(url, data, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 



    
  } 
  perfomOffre(commande :any,employeID :any) {
    let url = `v2/commandes/PerformEmp/${commande}/${employeID}`;
    return this.http.post(url, {}, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  rate(idc :any,idl :any,data:any) {
    let url = `v2/commandes/Review/${idc}/${idl}`;
    return this.http.post(url, data, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }

    // deleteOffre(commandid :any,offreid :any) {
    //   let url = `v2/commandes/cancelReq/${commandid}/${offreid}`;
    //   return this.http.post(url, {}, {
    //     headers: new HttpHeaders().set(
    //       'authorization',`${localStorage.getItem('token')}`
    //     ),
    //   }); }


    deleteOffre(cmd:any,_id: any,i:any) {
      let url = `v2/commandes/cancelReq/${cmd}/${_id}`;
      return this.http.delete(url, {  
             headers: new HttpHeaders().set(
          'authorization',`${localStorage.getItem('token')}`
        ),
      });
    }
  // getByIdForAdmin( adminorClientorlivreur ) 
  getById(id: any) {
    return this.http.get('v2/users/me', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getAllCommandesOfCurrentUser() {
    return this.http.get('v2/commandes/myCommandes', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getCommandById(id: any){
    return this.http.get('v2/commandes/mycommandes/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getCommandByIdforadmin(id: any){
    return this.http.get('v2/commandes/Administrator/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  getOffreByIdforadmin(id: any){
    return this.http.get('v2/offres/AdministratorCommande/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
 
  AllUnknowCommandes() {
    return this.http.get('v2/commandes/AllUnknowCommandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  
  
  ChangeCondition(_id :any) {
    let url = `v2/commandes/condition/${_id}`;
    return this.http.post(url, {}, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
   }

  getAllmissionsforEmp() {
    return this.http.get('v2/commandes/myMessions/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }


  getAllOffreforEmp() {
    return this.http.get('v2/offres/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getOneOffreforEmp(_id:any) {
    return this.http.get('v2/offres/'+_id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getAllOffreforClient(id:any) {
    return this.http.get('v2/offres/request/'+id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getCommandByIdforEmp(id :any) {
    return this.http.get('v2/commandes/'+id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getCommandByIdforEclient(id :any) {
    return this.http.get('v2/offres/getOneOffre/'+id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  getOneLivreur(id :any) {
    return this.http.get('v2/users/getEmp/'+id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }

  updateUser(_id: any, data: any) {
    let url = `v2/users/${_id}`;
    return this.http.patch(url, data, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 



    
  }
  updateCommande(id: any, user: any) {
    let url = `v2/commandes/${id}`;
    return this.http.patch(url, user, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 



    
  }
  updateOffre(id: any, data: any) {
    let url = `v2/offres/${id}`;
    return this.http.patch(url, data, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 



    
  }

  deletecCmmandeFoeAdmin(id: any) {
    return this.http.delete('v2/commandes/adminDeleteCmmd/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  deletecUserFoeAdmin(id: any) {
    return this.http.delete('v2/users/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }
  deleteCmdForClient(id: any) {
    return this.http.delete('v2/commandes/' + id, {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    });
  }

  // updateprofilelivreure(id: string, newprofile: any) {
  //   return this.http.patch('v2/users/' + id, newprofile);
  // }


  

  AllUnreachedCommandesforClient() {
    return this.http.get('v2/commandes/MyUnreachedCommandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }
  AllReachedCommandesforClient() {
    return this.http.get('v2/commandes/MyReachedCommandes/', {
      headers: new HttpHeaders().set(
        'authorization',`${localStorage.getItem('token')}`
      ),
    }); 
  }


  allUnReadedMessage() {
  return this.http.get('v2/messages/unreadMessages' , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
GetAllUnreadOffres() {
  return this.http.get('v2/offres/GetOffres' , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
GetAllUnreadMissions() {
  return this.http.get('v2/commandes/myNewMessions' , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
readMessage(id:any) {
  return this.http.get('v2/messages/'+id , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
readOffre(id:any) {
  return this.http.get('v2/offres/getOneOffre/'+id , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
readMissions(id:any) {
  return this.http.get('v2/commandes/myNewMessions/'+id , {
    headers: new HttpHeaders().set(
      'authorization',`${localStorage.getItem('token')}`
    ),
  });

}
}












