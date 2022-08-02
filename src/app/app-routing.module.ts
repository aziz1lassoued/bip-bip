import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AadminLayoutComponent } from './layout/aadmin-layout/aadmin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { FrontLivreurLayoutComponent } from './layout/front-livreur-layout/front-livreur-layout.component';
import { FrontProfileLayoutComponent } from './layout/front-profile-layout/front-profile-layout.component';
import { DetailsoffreComponent } from './views/admin/commands/detailsoffre/detailsoffre.component';
import { UnreadmessagesComponent } from './views/admin/messages/unreadmessages/unreadmessages.component';
import { IntroHomeComponent } from './views/front/home/intro-home/intro-home.component';
import { LoginModule } from './views/front/login/login.module';
import { LoginComponent } from './views/front/login/login/login.component';
import { RegistreComponent } from './views/front/registre/foldercomponentREGISTRE/registre/registre.component';
import { RegistreModule } from './views/front/registre/registre.module';
import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';
import { GurduserGuard } from './views/srvices/guards/gurdauser.guard';
// import { GurdadminGuard } from './views/srvices/guards/gurdadmin.guard';


const routes: Routes = [
  { path: '', component: FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'aide',loadChildren:()=>import('./views/front/aide/aide.module').then(m=>m.AideModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},


    

  ] },
  { path: 'client', component: FrontProfileLayoutComponent
  ,
  canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/front/client/client.module').then(m=>m.ClientModule)},

    {path:'createcmd',loadChildren:()=>import('./views/front/create-cmd/create-cmd.module').then(m=>m.CreateCmdModule)},

    {path:'livreur',loadChildren:()=>import('./views/front/livreur/livreur.module').then(m=>m.LivreurModule)},

    {path:'panier',loadChildren:()=>import('./views/front/panier/panier.module').then(m=>m.PanierModule)},
    {path:'compte',loadChildren:()=>import('./views/front/compte/compte.module').then(m=>m.CompteModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'offres/:id',loadChildren:()=>import('./views/front/offres/offres.module').then(m=>m.OffresModule)},
    {path:'encours/:CommandeID/:LivreurID',loadChildren:()=>import('./views/front/encours/encours.module').then(m=>m.EncoursModule)},
    // { path: '**', redirectTo: './views/front/encours' },detailss
    {path:'datacmd/:id',loadChildren:()=>import('./views/front/datacmd/datacmd.module').then(m=>m.DatacmdModule)},
    {path:'notfound',loadChildren:()=>import('./views/front/notfound/notfound.module').then(m=>m.NotfoundModule)},
    {path:'enattente',loadChildren:()=>import('./views/front/attente/attente.module').then(m=>m.AttenteModule)},
    {path:'livree',loadChildren:()=>import('./views/front/livree/livree.module').then(m=>m.LivreeModule)},
    {path:'review/:idc/:idl',loadChildren:()=>import('./views/front/review/review.module').then(m=>m.ReviewModule)},
    {path:'offresdetails/:id',loadChildren:()=>import('./views/front/offresdetails/offresdetails.module').then(m=>m.OffresdetailsModule)},
    {path:'modifiercommande/:id',loadChildren:()=>import('./views/front/modifiercommande/modifiercommande.module').then(m=>m.ModifiercommandeModule)},


  ] },




  { path: 'coursier', component: FrontLivreurLayoutComponent
  // ,
  // canActivate:[GurduserGuard]
  ,children:[
    {path:'',loadChildren:()=>import('./views/coursier/accueil/accueil.module').then(m=>m.AccueilModule)},

    

    {path:'allcommands',loadChildren:()=>import('./views/coursier/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'missions',loadChildren:()=>import('./views/coursier/missions/missions.module').then(m=>m.MissionsModule)},
    {path:'comptelivreur',loadChildren:()=>import('./views/coursier/compte-livreur/compte-livreur.module').then(m=>m.CompteLivreurModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'offres/:id',loadChildren:()=>import('./views/coursier/offres/offres.module').then(m=>m.OffresModule)},
    {path:'mesoffres',loadChildren:()=>import('./views/coursier/mesoffres/mesoffres.module').then(m=>m.MesoffresModule)},
    {path:'redirect',loadChildren:()=>import('./views/coursier/redirect/redirect.module').then(m=>m.RedirectModule)},
    {path:'notfound',loadChildren:()=>import('./views/coursier/notfound/notfound.module').then(m=>m.NotfoundModule)},
    {path:'notfounded',loadChildren:()=>import('./views/coursier/notfounded/notfounded.module').then(m=>m.NotfoundedModule)},
    {path:'modifieroffre/:id',loadChildren:()=>import('./views/coursier/modifieroffre/modifieroffre.module').then(m=>m.ModifieroffreModule)},
    {path:'onemissions/:id',loadChildren:()=>import('./views/coursier/onemissions/onemissions.module').then(m=>m.OnemissionsModule)},

    

    
    
    

  ] },





  { path: 'admin', component: AadminLayoutComponent ,canActivate:[GurdadminGuard], children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'livreurs',loadChildren:()=>import('./views/admin/livreurs/livreurs.module').then(m=>m.LivreursModule)},
    {path:'commands',loadChildren:()=>import('./views/admin/commands/commands.module').then(m=>m.CommandsModule)},
    {path:'moncompte',loadChildren:()=>import('./views/admin/moncompte/moncompte.module').then(m=>m.MoncompteModule)},
    {path:'client',loadChildren:()=>import('./views/admin/clientt/clientt.module').then(m=>m.ClienttModule)},
    {path:'details/:id',loadChildren:()=>import('./views/admin/details/details.module').then(m=>m.DetailsModule)},
    {path:'commands/close',loadChildren:()=>import('./views/admin/closecmdd/closecmdd.module').then(m=>m.ClosecmddModule)},
    {path:'commands/livre',loadChildren:()=>import('./views/admin/livre/livre.module').then(m=>m.LivreModule)},
    {path:'messages',loadChildren:()=>import('./views/admin/messages/messages.module').then(m=>m.MessagesModule)},
    {path:'admins',loadChildren:()=>import('./views/admin/admins/admins.module').then(m=>m.AdminsModule)},

    {path:'message/:id',component:UnreadmessagesComponent},
    {path:'detailsoffre/:id',component:DetailsoffreComponent},


    {path:'commands/opencmd',loadChildren:()=>import('./views/admin/opencmd/opencmd.module').then(m=>m.OpencmdModule)},




  ]},
  
 
  {path:'intro',component:IntroHomeComponent},

  {path:'login',component:LoginComponent},
  {path:'registre',component:RegistreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
