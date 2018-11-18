import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  description: string;
  draggable: boolean;
}

interface Farm {
  id: number;
  id_user: number;
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
  country: string;
  crops: [
    {
      id: number;
      name: string;
    }
  ];
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  readonly ROOT_URL =
    'https://gravitee-api-gateway.sa-stage.yaradigitallabs.io/';

  farms: Observable<any>;

  lat = -21.4689409;
  lng = -44.1022293;




  constructor(private httpClient: HttpClient) {}

  clickedMarker(name: string, crops: string) {
    console.log(`clicked the marker: ${name || crops}`);
  }

  getfarms() {

  }

  ngOnInit() {
    const headers = new HttpHeaders().set(
      'X-Gravitee-Api-Key',
      '57063f6d-555f-49f1-ba35-70573a69c941'
    );

    this.farms = this.httpClient.get(this.ROOT_URL + '/farm', { headers });
  }
}
