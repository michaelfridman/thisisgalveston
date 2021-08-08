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
  style = 'mapbox://styles/fridmanresume/ckru3bif7d54a17poy3qalicp';// 'mapbox://styles/mapbox/streets-v11';
  // 29.3013° N, 94.7977° W
  lat = 29.3013;
  lng = -94.7977;
  zoom = 12
  image: any;
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    this.buildMap();
    this.addRandomMarkers();
  }

  addMarker(lngLat: [number, number], config?: { color: String, rotation: Number }) {
    // Create a default Marker and add it to the map.
    var tempMarker = new mapboxgl.Marker()
      .setLngLat(lngLat, config )
      .addTo(this.map);
  }
  addRandomMarkers(){

    for (let i = 0; i < 10; i++){
    let move = Math.random()/(10/i);
    this.addMarker([this.lng + move, this.lat + move], { color: 'black', rotation: 45 });
    }

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    var nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, 'top-left');
    // var marker = new mapboxgl.Marker()
    //   .setLngLat([this.lng, this.lat])
    //   .addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    // console.log(this.map);


  }
}
