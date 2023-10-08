import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IpResponse } from 'src/app/interfaces/ip-response';
import { IpServiceService } from 'src/app/services/ip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ip: IpResponse = {} as IpResponse;
  ipAddress: string = '';

  constructor(private ipService: IpServiceService) {}
  ngOnInit(): void {
    this.initForClientIp();
  }

  ipAddressChange(value: any): void {
    this.ipAddress = value;
    this.fetchIpData();
  }

  fetchIpData(): void {
    this.ipService.getIpData(this.ipAddress).subscribe((val) => {
      this.ip = val;
    });
  }

  async initForClientIp(): Promise<void> {
    await this.getClientIp();
  }

  async getClientIp(): Promise<void> {
    var response = await lastValueFrom(this.ipService.getIpData(''));
    if (response) {
      this.ip = response;
    }
  }
}
