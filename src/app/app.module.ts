import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoutes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
