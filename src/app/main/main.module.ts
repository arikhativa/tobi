import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CardsModule } from '../cards/cards.module';
import { TrianglesModule } from '../triangles/triangles.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule, CardsModule, TrianglesModule
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
