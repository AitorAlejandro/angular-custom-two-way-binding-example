import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>(); // debe seguir la nomenclatura inputChange, sizeChange en este caso

  decrease() {
    if (this.size > 0) {
      this.size--;
      this.sizeChange.emit(this.size);
    }
  }
  increase() {
    this.size++;
    this.sizeChange.emit(this.size);
  }
}
