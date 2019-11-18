import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentAComponent
  ]
})
export class TestCompilerLoaderModule { }
