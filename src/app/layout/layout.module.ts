import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SkillsComponent } from './skills/skills.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    ClientsComponent,
    TestimonialsComponent,
    SkillsComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    NavigationComponent,
    ClientsComponent,
    SkillsComponent,
    TestimonialsComponent
  ]
})
export class LayoutModule { }
