import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
currentIndex = 0;
// prevSlide() {
//   const slider = document.getElementById('image-slider-container');
//   if (slider) {
//     const sliderWidth = slider.offsetWidth;
//     this.currentIndex = (this.currentIndex - 1 + slider.children.length) % slider.children.length;
//     slider.style.transform = `translateX(-${this.currentIndex * sliderWidth}px)`;
//   }
// }


//     nextSlide() {
//       const slider = document.getElementById('image-slider-container');
//       if (slider) {
//         const sliderWidth = slider.offsetWidth;
//         this.currentIndex = (this.currentIndex + 1) % slider.children.length;
//         slider.style.transform = `translateX(-${this.currentIndex * sliderWidth}px)`;
//       }
//     }

}
