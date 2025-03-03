import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Define routes first before using them
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

// Configuration for standalone component bootstrapping
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent, appConfig);

// Empty module since all components are standalone
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: []
})
export class AppModule { } 