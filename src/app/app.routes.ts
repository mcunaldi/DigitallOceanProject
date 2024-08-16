import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CardPageComponent } from './components/card-page/card-page.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: CardPageComponent
            }
        ]
    }
];
