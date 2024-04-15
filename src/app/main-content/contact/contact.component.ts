import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  initMap() {
    // Specify your API key

    // Get the map element
    var mapElement = document.getElementById('map');

    // Type assertion to ensure mapElement is not null
    var mapDiv = mapElement as HTMLElement;

    // Create a new map centered at the specified location
    var map = new google.maps.Map(mapDiv, {
      center: { lat: -22.9519, lng: -43.2105 }, // Rio de Janeiro coordinates
      zoom: 13,
    });
  }
}
