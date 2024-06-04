import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { ContactComponent } from './contact/contact.component';
import { ListofwinComponent } from './listofwin/listofwin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listofwin', component: ListofwinComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistraionComponent },
    { path: 'contact', component: ContactComponent },
    
];
