import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: 'simpleModal.component.html',
  styles: ['.modal-body {height: 250px; overflow-y: scroll;}']
})
export class SimpleModalComponent {
  @Input() title : string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: boolean;

  @ViewChild('modalcontainer', {static: false}) containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any){}

  closeModal() {
    if(this.closeOnBodyClick) {
      this.$(this.containerEl.nativeElement).modal('hide');

    }
  }

}
