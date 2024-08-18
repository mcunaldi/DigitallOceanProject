import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "card-page",
                component: CardPageComponent
            },
            {
                path: "certificate",
                component: CertificateComponent
            }
        ]
    }
];
