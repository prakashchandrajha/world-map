import { Routes } from '@angular/router';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { HeritageSiteComponent } from './components/heritage-site/heritage-site.component';
import { MemberComponent } from './components/member/member.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '', component: LandingPageComponent
    },
    { path: 'heritage-site/:id', component: HeritageSiteComponent },
    { path: 'heritage-site', component: HeritageSiteComponent },
    {path:'member',component:MemberComponent}
];
