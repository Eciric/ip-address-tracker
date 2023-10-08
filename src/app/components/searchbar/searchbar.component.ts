import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  @Input() ipAddress!: string;
  @Output() ipAddressChange = new EventEmitter<string>();

  onSubmit(): void {
    this.ipAddressChange.emit(this.ipAddress);
  }
}
