import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';

const routes: Routes = [
   { path:'',component:HomeComponent},
   { path: 'about', component: AboutComponent },
   { path: 'resume', component: ResumeComponent },
   { path: 'services', component: ServicesComponent },
   { path: 'skills', component: PortfolioComponent },
   { path: 'contact', component: ContactComponent},
   { path: 'messagesDetails', component: MessageDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
