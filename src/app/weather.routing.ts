import { ForecastComponent } from './forecast/forecast.component';
import { CurrentComponent } from './current/current.component';
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const WEATHER_ROUTER:Routes = [
    {path: '', component: CurrentComponent},
    {path: 'forecast', component: ForecastComponent}
]


//<any> sam ja dodao ili <{}>
export const weatherRouting:ModuleWithProviders<{}>= RouterModule.forRoot(WEATHER_ROUTER)
