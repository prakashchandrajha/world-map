import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourist-places',
  imports: [CommonModule],
  templateUrl: './tourist-places.component.html',
  styleUrl: './tourist-places.component.css'
})
export class TouristPlacesComponent implements OnInit {

  currentIndex = 0;
   private autoPlayInterval: any;
  selectedCountry: string = '';
  images2 = [
      
    'assets/images/heritage-sites/g2.jpg',
    'assets/images/heritage-sites/g3.jpg',
    'assets/images/heritage-sites/g4.jpg',
    'assets/images/heritage-sites/g6.jpg',

    
  ];


  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images2.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images2.length) % this.images2.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
