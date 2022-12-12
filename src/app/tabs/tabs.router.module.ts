import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule',
          },
        ],
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule',
          },
        ],
      },
     
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule',
          },
        ],
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
