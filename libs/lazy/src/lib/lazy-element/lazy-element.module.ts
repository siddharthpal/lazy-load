import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCustomElementComponent } from '../lazy-custom-element/lazy-custom-element.component';

@NgModule({
  declarations: [LazyCustomElementComponent],
  imports: [
    CommonModule
  ],
  exports: [LazyCustomElementComponent]
})
export class LazyElementModule { }
