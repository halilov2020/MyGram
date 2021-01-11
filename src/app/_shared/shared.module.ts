import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [TruncatePipe,LoaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
