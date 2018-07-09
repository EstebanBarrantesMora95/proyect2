import{ModuleWithProviders}from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{HomeComponent}from './components/home.components';
import{ErrorComponent} from './components/error.components';
import{ClientListComponent} from './components/client-list.component';
import{ClientAddComponent} from './components/client-add.component';
const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'client',component:ClientListComponent},
    {path:'client-add',component:ClientAddComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
