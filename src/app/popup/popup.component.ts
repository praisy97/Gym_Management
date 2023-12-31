import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
