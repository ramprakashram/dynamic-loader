import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompilerLoaderModule } from './components/test-compiler-loader/test-compiler-loader.module';
import { DynamicModuleComponent } from './dynamic-module.component';



@NgModule({
  declarations: [
    DynamicModuleComponent
  ],
  imports: [
    CommonModule,
    TestCompilerLoaderModule
  ],
  exports: [
    DynamicModuleComponent
  ]
})
export class DynamicModuleModule { }
