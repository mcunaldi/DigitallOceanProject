import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CertificateComponent } from './components/certificate/certificate.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
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
