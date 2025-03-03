import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// Import other components you want to route to
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add more routes as needed
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // Wildcard route for 404 page
  // { path: '**', component: PageNotFoundComponent }
];
