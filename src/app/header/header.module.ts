import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule, NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
