import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeamMember } from '../../../core/models/user.model';

@Component({
  selector: 'app-custom-modal',
  imports:[CommonModule],
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
  standalone: true
})
export class CustomModalComponent {
  @Input() visible = false;
  @Input() title = 'Confirmation';
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }

  confirm() {
    this.onConfirm.emit();
    this.close();
  }

  cancel() {
    this.close();
  }

  onBackdropClick() {
    this.close();
  }
}
