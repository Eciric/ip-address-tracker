import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { IpResponse } from 'src/app/interfaces/ip-response';
import { IpServiceService } from 'src/app/services/ip-service.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnChanges {
  @Input() ipData!: IpResponse;
  map: any;
  marker: any;

  ngOnInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ipData = changes['ipData'].currentValue;
    if (this.ipData && this.ipData.query) {
      this.moveMap();
    }
  }

  initMap(): void {
    if (this.ipData?.query) {
      this.map = L.map('map', {
        center: [this.ipData.lat, this.ipData.lon],
        zoom: 13,
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);

      this.marker = L.marker([this.ipData.lat, this.ipData.lon], {
        icon: L.icon({
          iconUrl: '/ip-address-tracker/assets/images/icon-location.svg',
          iconSize: [46, 56],
        }),
      }).addTo(this.map);
    }
  }

  moveMap(): void {
    if (this.map && this.marker) {
      this.map.panTo([this.ipData.lat, this.ipData.lon]);
      this.marker.setLatLng([this.ipData.lat, this.ipData.lon]);
    } else {
      this.initMap();
    }
  }
}
