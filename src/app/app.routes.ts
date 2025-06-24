import { Routes } from '@angular/router';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { HeritageSiteComponent } from './components/heritage-site/heritage-site.component';
import { MemberComponent } from './components/member/member.component';

export const routes: Routes = [
    {
        path: '', component: WorldMapComponent
    },
    { path: 'heritage-site/:id', component: HeritageSiteComponent },
    { path: 'heritage-site', component: HeritageSiteComponent },
    {path:'member',component:MemberComponent}
];
