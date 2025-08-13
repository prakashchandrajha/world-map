import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    // Create map instance
    this.map = L.map('map', {
      center: [20.5937, 78.9629], // Center on India
      zoom: 4,
      minZoom: 2,
      maxZoom: 18
    });

    // Add base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
      errorTileUrl: 'https://tile.openstreetmap.org/0/0/0.png'
    }).addTo(this.map);

    // Add satellite layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      // attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 18
    }).addTo(this.map);

    // Add layer control
    const baseMaps = {
      // "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    };
    L.control.layers(baseMaps).addTo(this.map);

    // Custom icon for markers
    const customIcon = L.icon({
      iconUrl: 'assets/images/ii.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers for various locations
    const locations = [
      { id: 'statue-of-unity', name: 'Statue of Unity', lat: 21.8380, lng: 73.7191, country: 'India', description: 'World\'s tallest statue' },
      { id: 'golden-temple', name: 'Golden Temple', lat: 31.6200, lng: 74.8765, country: 'India', description: 'Most important Sikh gurdwara' },
      { id: 'eiffel-tower', name: 'Eiffel Tower', lat: 48.8584, lng: 2.2945, country: 'France', description: 'Iconic iron lattice tower' },
      { id: 'statue-of-liberty', name: 'Statue of Liberty', lat: 40.6892, lng: -74.0445, country: 'USA', description: 'Neoclassical sculpture' },
      { id: 'great-wall', name: 'Great Wall of China', lat: 40.4319, lng: 116.5704, country: 'China', description: 'Series of fortifications' },
      { id: 'sydney-opera', name: 'Sydney Opera House', lat: -33.8568, lng: 151.2153, country: 'Australia', description: 'Performing arts center' },
      { id: 'pyramids', name: 'Pyramids of Giza', lat: 29.9792, lng: 31.1342, country: 'Egypt', description: 'Ancient Egyptian pyramids' },
      { id: 'machu-picchu', name: 'Machu Picchu', lat: -13.1631, lng: -72.5450, country: 'Peru', description: '15th-century Inca citadel' },
    ];

    // Add markers with popups and click handlers
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo(this.map!)
        .bindPopup(`
         <div class=\"custom-popup bg-white p-4 rounded-lg shadow-lg max-w-sm\">
  <h3 class=\"text-xl font-semibold text-gray-800 mb-2\">${location.name}</h3>
  <p class=\"text-sm text-gray-600 mb-1\"><span class=\"font-medium text-gray-700\">Country:</span> ${location.country}</p>
  <p class=\"text-sm text-gray-600 mb-1\">${location.description}</p>
  <p class=\"text-sm text-gray-600 mb-4\">
    <span class=\"font-medium text-gray-700\">Coordinates:</span> 
    ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}
  </p>
  <button 
    class=\"view-details-btn mt-4 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out\"
    data-id=\"${location.id}\"
  >
    View Details
  </button>
</div>
        `);

      // Add click handler to the popup
      marker.on('popupopen', () => {
        setTimeout(() => {
          const button = document.querySelector(`[data-id="${location.id}"]`);
          if (button) {
            button.addEventListener('click', () => {
              this.router.navigate(['/heritage-site', location.id]);
            });
          }
        }, 100);
      });
    });
  }
} 