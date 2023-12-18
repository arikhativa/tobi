import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})


export class MainComponent {
    ngOnInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
                else {
                    entry.target.classList.remove("show");
                }

            });
        });

        const hiddenElem = document.querySelectorAll(".hidden");
        hiddenElem.forEach(e => observer.observe(e));
    }
}
