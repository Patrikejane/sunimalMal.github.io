import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponentComponent} from "./home-component/home-component.component";
import {ProfileComponentComponent} from "./profile-component/profile-component.component";
import {AboutComponentComponent} from "./about-component/about-component.component";


export const routes: Routes = [
    {
      path: '',
      component: HomeComponentComponent,
    },
    {
      path: 'home',
      component: HomeComponentComponent,
    },
    {
      path: 'profile',
      component: ProfileComponentComponent,
    },
    {
      path: 'about',
      component: AboutComponentComponent,
    },
]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes,{
  preloadingStrategy: PreloadAllModules,
});
