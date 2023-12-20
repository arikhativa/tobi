import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrianglesComponent } from './triangles.component';



@NgModule({
    declarations: [],
    imports: [
        CommonModule, TrianglesComponent
    ],
    exports: [TrianglesComponent]
})
export class TrianglesModule { }
