import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  showAll() {
    document
      .querySelectorAll('.gallery-item')
      .forEach((item) => ((item as HTMLElement).style.display = 'block'));
  }

  showImages() {
    document.querySelectorAll('.gallery-item').forEach((item) => {
      if (item.querySelector('img')) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }

  showVideos() {
    document.querySelectorAll('.gallery-item').forEach((item) => {
      if (item.querySelector('iframe')) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }
}
