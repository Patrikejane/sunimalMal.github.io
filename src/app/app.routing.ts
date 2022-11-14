import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


export const routes: Routes = [

]
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes,{
  preloadingStrategy: PreloadAllModules,
});
