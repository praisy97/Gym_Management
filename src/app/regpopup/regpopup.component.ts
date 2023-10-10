import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-regpopup',
  templateUrl: './regpopup.component.html',
  styleUrls: ['./regpopup.component.css']
})
export class RegpopupComponent {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
