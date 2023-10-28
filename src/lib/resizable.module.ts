import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragHandleComponent } from './drag-handle.component';
import { ResizableDirective } from './resizable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DragHandleComponent,
    ResizableDirective
  ],
  exports: [
    DragHandleComponent,
    ResizableDirective
  ],
})
export class ResizableModule {
}
