import { Component, Input } from '@angular/core';
import { IpResponse } from 'src/app/interfaces/ip-response';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() ipData!: IpResponse;
}
