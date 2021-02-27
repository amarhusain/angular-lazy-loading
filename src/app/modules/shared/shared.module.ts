import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisbahFooterComponent } from './layout/misbah-footer/misbah-footer.component';
import { MisbahHeaderComponent } from './layout/misbah-header/misbah-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MisbahFooterComponent, MisbahHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MisbahHeaderComponent, MisbahFooterComponent]
})
export class SharedModule { }
