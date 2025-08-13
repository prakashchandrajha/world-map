import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() items: {
    title: string;
    subtitle?: string;
    position: string;
    description: string;
  }[] = [];

  @Input() centerImage: string = '';
  
  showModal = false;
  selectedItem: any = null;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if click is outside the modal content
    const modalContent = document.querySelector('.modal-content');
    const clickedElement = event.target as HTMLElement;
    
    if (this.showModal && modalContent && !modalContent.contains(clickedElement)) {
      this.closeModal();
    }
  }

  openModal(item: any) {
    // Close any existing modal before opening a new one
    if (this.showModal) {
      this.closeModal();
    }
    this.selectedItem = item;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedItem = null;
  }
} 