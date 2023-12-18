import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent {
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {

    }
    // onInit() {
    //     const l = document.querySelectorAll('.card');
    //     l.forEach((e, i) => {
    //         const observer = new IntersectionObserver(
    //             ([e]) => {
    //                 const limit = 150;

    //                 if (!e.target.classList.contains('is-pinned') && e.boundingClientRect.top < limit) {
    //                     e.target.classList.toggle('is-pinned')
    //                 }
    //                 else if (e.target.classList.contains('is-pinned') && e.boundingClientRect.top > limit) {
    //                     e.target.classList.remove('is-pinned')
    //                 }
    //             },
    //             { threshold: [1] }
    //         );
    //         observer.observe(e)
    //     });
    // }
}


