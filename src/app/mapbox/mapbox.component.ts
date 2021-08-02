import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
map: mapboxgl.Map;
style = 'mapbox://styles/mapbox/streets-v11';
// 29.3013° N, 94.7977° W
lat = 29.3013;
lng = -94.7977;
zoom = 12
  constructor() {
      mapboxgl.accessToken = environment.mapbox.accessToken;
   }

  ngOnInit(): void {
    this.buildMap();
  }

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: this.zoom,
    center: [this.lng, this.lat]
  })
 this.map.addControl(new mapboxgl.NavigationControl());
}

}
