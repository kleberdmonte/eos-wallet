import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  LatLng
} from "@ionic-native/google-maps";
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MapPage");

    this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    // Environment.setEnv({
    //   API_KEY_FOR_BROWSER_RELEASE: "(your api key for `https://`)",
    //   API_KEY_FOR_BROWSER_DEBUG: "(your api key for `http://`)"
    // });

    let element: HTMLElement = document.getElementById("map_canvas");

    this.map = GoogleMaps.create(element);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    let ionic: LatLng = new LatLng(-8.059711, -34.870607);

    let position = { target: ionic, zoom: 18, tilt: 30 };

    this.map.moveCamera(position);

    let marker: Marker = this.map.addMarkerSync({
      title: "PicChain Mercado",
      icon: "blue",
      animation: "DROP",
      position: {
        lat: -8.059711,
        lng: -34.870607
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert("clicked");
    });
  }
}