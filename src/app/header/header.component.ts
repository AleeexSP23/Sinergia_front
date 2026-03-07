import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(){

    if(window.scrollY > 50){
      this.isScrolled = true;
    }else{
      this.isScrolled = false;
    }

  }

}
