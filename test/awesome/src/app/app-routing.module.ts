import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bilim1Component } from './bilim1/bilim1.component';
import { Bilim10Component } from './bilim10/bilim10.component';
import { Bilim2Component } from './bilim2/bilim2.component';
import { Bilim3Component } from './bilim3/bilim3.component';
import { Bilim4Component } from './bilim4/bilim4.component';
import { Bilim5Component } from './bilim5/bilim5.component';
import { Bilim6Component } from './bilim6/bilim6.component';
import { Bilim7Component } from './bilim7/bilim7.component';
import { Bilim8Component } from './bilim8/bilim8.component';
import { Bilim9Component } from './bilim9/bilim9.component';
import { BilimfinComponent } from './bilimfin/bilimfin.component';
import { CesitlerComponent } from './cesitler/cesitler.component';
import { HomeComponent } from './home/home.component';
import { SoruComponent } from './soru/soru.component';
import { Soru10Component } from './soru10/soru10.component';
import { Soru3Component } from './soru3/soru3.component';
import { Soru4Component } from './soru4/soru4.component';
import { Soru5Component } from './soru5/soru5.component';
import { Soru6Component } from './soru6/soru6.component';
import { Soru7Component } from './soru7/soru7.component';
import { Soru8Component } from './soru8/soru8.component';
import { Soru9Component } from './soru9/soru9.component';
import { SorufinComponent } from './sorufin/sorufin.component';

const routes: Routes = [
  { path:'',
  component: HomeComponent,
  pathMatch: 'full',
 },
 { path:'soru',
  component: SoruComponent,
 },
 {
   path:'soru2',
   component: CesitlerComponent
 },
 {
  path:'soru3',
  component: Soru3Component
},
{
  path:'soru4',
  component: Soru4Component
},
{
  path:'soru5',
  component: Soru5Component
},
{
  path:'soru6',
  component: Soru6Component
},
{
  path:'soru7',
  component: Soru7Component
},
{
  path:'soru8',
  component: Soru8Component
},
{
  path:'soru9',
  component: Soru9Component
},
{
  path:'soru10',
  component: Soru10Component
},
{
  path:'sorufin',
  component: SorufinComponent
},
{
  path:'bilim1',
  component: Bilim1Component
},
{
  path:'bilim2',
  component: Bilim2Component
},
{
  path:'bilim3',
  component: Bilim3Component
},
{
  path:'bilim4',
  component: Bilim4Component
},
{
  path:'bilim5',
  component: Bilim5Component
},
{
  path:'bilim6',
  component: Bilim6Component
},
{
  path:'bilim7',
  component: Bilim7Component
},
{
  path:'bilim8',
  component: Bilim8Component
},
{
  path:'bilim9',
  component: Bilim9Component
},
{
  path:'bilim10',
  component: Bilim10Component
},
{
  path:'bilimfin',
  component: BilimfinComponent
},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
