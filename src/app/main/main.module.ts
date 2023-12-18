import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { CardsComponent } from '../cards/cards.component';



@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule, CardsComponent
    ],
    exports: [
        MainComponent, CardsComponent
    ]
})
export class MainModule { }
