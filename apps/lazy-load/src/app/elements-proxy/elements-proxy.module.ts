import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementModule, LazyCustomElementComponent } from '@lazy-load/lazy';

@NgModule({
  declarations: [],
  imports: [CommonModule, LazyElementModule],
  bootstrap: [LazyCustomElementComponent]
})
export class ElementsProxyModule {}
