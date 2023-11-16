import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/view/about/about.component';
import { ContactComponent } from './components/view/contact/contact.component';
import { HomeComponent } from './components/view/home/home.component';
import { ItemsComponent } from './components/view/items/items.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'work',
        component: AboutComponent
    },
    {
        path: 'shop',
        component: ItemsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
