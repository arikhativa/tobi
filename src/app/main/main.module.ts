import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule, CardsModule
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
