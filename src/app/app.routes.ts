import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./shared/auth.guard";
import { SingupComponent } from './singup/singup.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SingupComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];
