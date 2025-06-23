import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-world-map',
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent implements OnInit {
  private map: L.Map | undefined;

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [20.5937, 78.9629], // Center on India
      zoom: 4,
      minZoom: 2,
      maxZoom: 18
    });

    // Add base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(this.map);

    // Add satellite layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 18
    }).addTo(this.map);
  }
} 