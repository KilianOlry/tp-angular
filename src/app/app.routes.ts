import { Routes } from '@angular/router';
import { LandingPageComponent } from '@/components/landing-page/landing-page.component';
import { ErrorComponent } from './components/error/error.component';

import { authRoutes } from './routes/auth.routes';
import { AuthGuard } from './guards/auth/auth.guard';

const appTitle = "WebSnapApp";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    pathMatch: "full",
    loadComponent: () => import("@/components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
  },
  {
    path:"RicketMorty",
    title: `Rick et Morty - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("@/components/http/data/data.component").then(m => m.DataComponent)
  },
  {
    path:"nasa",
    title: `Nasa - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("@/components/http/nasa/nasa.component").then(m => m.NasaComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.routes").then(m => m.authRoutes)
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => import("@/components/error/error.component").then(m => m.ErrorComponent)
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
