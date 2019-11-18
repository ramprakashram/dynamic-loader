import { Component, OnInit, ViewChild, ViewContainerRef, Compiler, Injector, NgModuleRef, AfterViewInit } from '@angular/core';
import { TestCompilerLoaderModule } from './components/test-compiler-loader/test-compiler-loader.module';
declare const System;

@Component({
  selector: 'app-dynamic-module',
  templateUrl: './dynamic-module.component.html',
  styleUrls: ['./dynamic-module.component.scss']
})
export class DynamicModuleComponent implements AfterViewInit {

  @ViewChild('loadHere', {read: ViewContainerRef, static: false}) container: ViewContainerRef;


  constructor(private compiler: Compiler, private injector: Injector, private moduleRef: NgModuleRef<any>) { }

  ngAfterViewInit() {
    this.compiler.compileModuleAndAllComponentsAsync(TestCompilerLoaderModule).then((compiled) => {
      console.log(compiled.componentFactories);

      if (compiled && compiled.componentFactories && compiled.componentFactories.length > 0) {
        compiled.componentFactories.forEach((eachCompiledComponent) => {
          const cmpRef = eachCompiledComponent.create(this.injector, [], null, this.moduleRef);
          cmpRef.instance.testInput = 'World';
          // Array of Dynamic Components input
          console.log(eachCompiledComponent.inputs);
          this.container.insert(cmpRef.hostView);
        });
      }
    });
  }

}
